import {TouchableOpacity, View, Text, StyleSheet, Clipboard, Platform, Image} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "../ui/Icon";
import { colors, radiusMid, spacing } from "../../constants/theme";
import useMovies from "../../hooks/movies";
export const BodySection = () =>{
    const {selectedMovie} = useMovies()
    return(
        <View style={{flex: 1,marginTop:5,borderRadius:10}}>
            <LinearGradient colors={["#fff","#e8e9f5","#fff","#F6BDA7"]} style={styles.footerStyle}>
                <View style={styles.ProfileFooterHeader}>
                    <View style={{alignContent:'center',alignItems:'center',marginTop:-10}}>
                        <Icon type="FontAwesome" name="ellipsis-h" color="#63acfa" size={36} />
                    </View>

                    <View style={{flexDirection:'row',padding:12}}>
                        <View style={{alignItems:'flex-start',width:'30%'}}>
                            <View>
                                <Text style={{color:colors.grey,fontFamily:'FontLight',textAlign:'center'}}>Rank</Text>
                                <Text style={{color:colors.grey,fontFamily:'FontBold',textAlign:'center'}}>{selectedMovie?.rank}</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'center',flex:1,borderRightWidth:1,borderRightColor:colors.secondary,borderLeftWidth:1,borderLeftColor:colors.secondary}}>
                            <View>
                                <Text style={{color:colors.grey,fontFamily:'FontLight',textAlign:'center'}}>Views</Text>
                                <Text style={{color:colors.grey,fontFamily:'FontBold',textAlign:'center'}}>{selectedMovie?.views}</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'flex-end',width:'30%'}}>
                            <View>
                                <Text style={{color:colors.grey,fontFamily:'FontLight',textAlign:'center'}}>Year</Text>
                                <Text style={{color:colors.grey,fontFamily:'FontBold',textAlign:'center'}}>{selectedMovie?.year}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:spacing}}>
                    <Text style={{color:colors.grey,fontFamily:'FontLight',textAlign:'left'}}>{selectedMovie?.description}</Text>
                </View>
                
                <View style={{flexDirection:'row',borderColor:'#f2eae9',borderBottomWidth:0.8,padding:10,backgroundColor:colors.secondary,justifyContent:'center',borderRadius:radiusMid,marginTop:spacing}}>
                    <View style={{width:30,justifyContent:'center'}}>
                        <Icon type='AntDesign' name="user" size={30} color={colors.orange}/>
                    </View>
                    <View style={{justifyContent:'center',alignContent:'center',flex:1}}>
                        <Text style={{color:colors.white,fontFamily:'FontBold',paddingLeft:15,fontSize:Platform.OS === 'android' ? 12 : 14}}>CAST</Text>
                    </View>
                </View>

                <View style={{marginTop:spacing - 6}}>
                    <Text style={{color:colors.grey,fontFamily:'FontBold',textAlign:'left'}}>{selectedMovie?.actors}</Text>
                </View>
                <View style={{flexDirection:'row',borderColor:'#f2eae9',borderBottomWidth:0.8,padding:10,backgroundColor:colors.secondary,justifyContent:'center',borderRadius:radiusMid,marginTop:spacing}}>
                    <View style={{width:30,justifyContent:'center'}}>
                        <Icon type='AntDesign' name="star" size={30} color={colors.orange}/>
                    </View>
                    <View style={{justifyContent:'center',alignContent:'center',flex:1}}>
                        <Text style={{color:colors.white,fontFamily:'FontBold',paddingLeft:15,fontSize:Platform.OS === 'android' ? 12 : 14}}>REVIEWS</Text>
                    </View>
                </View>

                <View style={{marginTop:spacing - 6}}>
                    <Text style={{color:colors.grey,fontFamily:'FontBold',textAlign:'left'}}>Jim Corey, Janet Cheek, John Cena</Text>
                </View>
            </LinearGradient>
        </View>
    )
};
export const styles = StyleSheet.create({
    footerStyle: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        elevation: 10,
        paddingBottom:30,
        marginTop:-70
    },
    ProfileFooterHeader:{
        backgroundColor:'#fff',borderTopLeftRadius: 30, borderTopRightRadius: 30,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 1,
        borderBottomWidth:1,
        borderBottomColor:'#63acfa'
    },
});