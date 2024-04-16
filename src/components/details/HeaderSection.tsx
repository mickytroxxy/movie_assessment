import { Dimensions, View } from "react-native"
import { memo } from "react"
import * as Animatable from 'react-native-animatable';
import useMovies from "../../hooks/movies";
const {width} = Dimensions.get("screen");
export const HeaderSection = memo(() =>{
    const {selectedMovie} = useMovies();
    const avatar = selectedMovie?.poster
    console.log(selectedMovie)
    return(
        <View style={{alignItems:'center'}}>
            <Animatable.Image resizeMode="cover" animation="slideInDown" duration={1500} useNativeDriver={true} source={{uri : avatar !== "" ? avatar : 'https://picsum.photos/400/400'}} style={{width: width,minHeight: width}}></Animatable.Image>
        </View>
    )
})