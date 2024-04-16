import React, { memo } from 'react';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import Icon from '../ui/Icon';
import useMovies from '../../hooks/movies';
import { colors } from '../../constants/theme';

interface ForeGroundProps {}

const ForeGround: React.FC<ForeGroundProps> = memo(() => {
  const {selectedMovie} = useMovies();
  return (
    <View style={{flex: 1,marginTop: Platform.OS === 'android' ? -120 : -50 }}>
      <TouchableOpacity style={{zIndex:1,position:'absolute',top:'50%',alignSelf:'center'}}><Icon name='playcircleo' type='AntDesign' size={72} color={colors.white} /></TouchableOpacity>
      <View style={{flex:3}}></View>
      <View style={{flex:1,padding:5,flexDirection:'row'}}>
        <View style={styles.usernameView}>
        <Text style={{color:'#fff',fontSize:12,fontFamily:'FontBold'}}>{selectedMovie?.title}</Text>
        </View>
      </View>
    </View>
  );
});

export const styles = StyleSheet.create({
  usernameView:{
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    height: 50, 
    alignContent:"center", 
    alignItems:"center",
    borderTopRightRadius:50,
    borderBottomRightRadius:700,
    justifyContent:'center',
    marginLeft:5,
    borderTopLeftRadius:700,
    flex:1
  },  
});

export default ForeGround;
