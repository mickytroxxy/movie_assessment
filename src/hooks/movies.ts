
import {useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect, useState } from 'react';
import { fetchMovieDetails, fetchRandomMovies, searchForMovies } from '../api';
import { setMovies, setSelectedMovie } from '../redux/slices/movies';
import { mockedMovies } from '../api/dummy';
import { useNavigation } from '@react-navigation/native';
import { Movie, MovieDB } from '../constants/Types';
import useFetchingState from './useFetchingState';

const useMovies= () => {
    const dispatch = useDispatch();
    const { movies:savedMovies, recentlyViewed, selectedMovie } = useSelector((state: RootState) => state.movies);
    const [formData,setFormData] = useState({key_word:''});
    const [movies,setlocalMovies] = useState(savedMovies);
    const navigation = useNavigation();
    const {updateFetchingState} = useFetchingState()
    const handleChange = (field:string,value:string) => {
        setFormData(v =>({...v, [field] : value}));
        if(value?.length > 2){
            searchMovies(value)
        }else{
            setlocalMovies(savedMovies)
        }
    };

    const getRandomMovies = async() => {
        updateFetchingState(true,'Fetching movies...');
        const response = await fetchRandomMovies();
        response.length > 0 && dispatch(setMovies(response));
        updateFetchingState(false,'')
    }
    const searchMovies = async (key_word: string) => {
        const response: any[] = await searchForMovies(key_word);
        if (response.length > 0) {
            setlocalMovies(response.map(movie => ({
                title: movie['#TITLE'],
                id: movie['#IMDB_ID'],
                actors: movie['#ACTORS'],
                year: movie['#YEAR'],
                rank: movie['#RANK'],
                poster: movie['#IMG_POSTER'],
                description: `A movie by ${movie['#ACTORS']}. Released in ${movie?.['#YEAR']}`,
                mocked: false
            })));
        } else {
            setlocalMovies(savedMovies);
        }
    }
    const getMovieDetails = async (obj:Movie) => {
        const {id:movieId,mocked} = obj;
        let response:any = null
        const views = (Math.floor(Math.random() * 10000) + 1).toString()
        if(mocked){
            response = mockedMovies.filter(movie => movie.id === movieId)?.[0];

        }else{
            response = await fetchMovieDetails(movieId);
            const main = response.main;
            const reviews = main.reviews;
            const totalCount = reviews.total;
            response = {...obj,totalCount}
        }
        dispatch(setSelectedMovie({...response,views}));
        navigation.navigate('Details')
    }
    useEffect(() => {
        getRandomMovies();
    },[])

    return {movies, recentlyViewed,handleChange,formData,getMovieDetails,selectedMovie};
};

export default useMovies;
