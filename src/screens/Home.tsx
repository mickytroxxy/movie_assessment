import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, radiusBig, radiusMid, radiusSmall, screenPadding, spacing } from '../constants/theme';
import TextArea from '../components/ui/TextArea';
import useMovies from '../hooks/movies';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native-animatable';
import { Movie } from '../constants/Types';
import Icon from '../components/ui/Icon';
const {width} = Dimensions.get('screen')
function Home(): React.JSX.Element {
  const {handleChange,movies,getMovieDetails} = useMovies();
  return (
    <SafeAreaView style={{marginTop:0,flex:1}}>
      <LinearGradient colors={[colors.secondary, colors.faintGray, colors.primary]} style={{flex:1}}>
        <ScrollView>
          
          <View style={{backgroundColor:colors.primary,padding:screenPadding,borderBottomLeftRadius:radiusBig,borderBottomRightRadius:radiusBig}}>
            <TextArea attr={{field:'search',icon:{name:'search',type:'Feather',min:5,color:colors.primary},keyboardType:'default',placeholder:'Search for a movie',color:'#009387',handleChange}} />
          </View>

          <View style={{padding:screenPadding,gap:spacing}}>
            <Text style={{fontFamily:'FontLight'}}>Recently Watched</Text>
            <ScrollView style={{marginTop:spacing,gap:spacing}} horizontal showsHorizontalScrollIndicator={false}>
              {movies?.length > 0 && movies?.map((movie:Movie,i:number) => 
                <TouchableOpacity onPress={() => getMovieDetails(movie)} key={movie.id} style={{borderRadius:radiusBig,alignItems:'center',width:(width - (screenPadding * 2)),marginRight:12}}>
                  <Image resizeMode='cover' source={{uri:movie?.poster}} style={{width:'100%',height:200,borderRadius:radiusBig}} />
                  <View style={{position:'absolute',alignSelf:'flex-start',backgroundColor:'rgba(0,0,0,0.5)',borderTopRightRadius:radiusMid,borderBottomRightRadius:radiusMid,borderTopLeftRadius:radiusBig,padding:spacing}}>
                    <Text style={{fontFamily:'FontBold',color:colors.white}}>{movie?.title}</Text>
                  </View>
                  <View style={{alignSelf:'flex-start'}}>
                    <Text style={{fontFamily:'FontLight',color:colors.grey}}>{movie?.description}</Text>
                  </View>
                </TouchableOpacity>
              )}
            </ScrollView>
              <View style={{flexDirection:'row',borderColor:'#f2eae9',borderBottomWidth:0.8,padding:10,marginBottom:10,backgroundColor:colors.primary,justifyContent:'center',borderRadius:10}}>
                  <View style={{width:30,justifyContent:'center'}}>
                      <Icon type='AntDesign' name="star" size={30} color={colors.orange}/>
                  </View>
                  <View style={{justifyContent:'center',alignContent:'center',flex:1}}>
                      <Text style={{color:colors.white,fontFamily:'FontBold',paddingLeft:15,fontSize:Platform.OS === 'android' ? 12 : 14}}>OUR TOP PICKS FOR YOU</Text>
                  </View>
              </View>
              <View style={{flexDirection:'row',gap:spacing,flexWrap:'wrap',justifyContent: 'space-between',display:'flex'}}>
                {movies?.length > 0 && [...movies].sort(() => Math.random() - 0.5)?.map((movie:Movie,i:number) => 
                  <TouchableOpacity onPress={() => getMovieDetails(movie)} key={i} style={{borderRadius:radiusMid,alignItems:'center',width:(((width - (screenPadding * 2)) / 2) - spacing)}}>
                    <Image resizeMode='cover' source={{uri:movie?.poster}} style={{width:'100%',height:200,borderRadius:radiusMid}} />
                    <View style={{position:'absolute',alignSelf:'flex-start',backgroundColor:'rgba(0,0,0,0.5)',borderTopRightRadius:radiusMid,borderBottomRightRadius:radiusMid,borderTopLeftRadius:radiusMid,padding:spacing}}>
                      <Text style={{fontFamily:'FontBold',color:colors.white}}>{movie?.title}</Text>
                    </View>
                    <View style={{alignSelf:'flex-start'}}>
                      <Text numberOfLines={3} style={{fontFamily:'FontLight',color:colors.grey}}>{movie?.description}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Home;
