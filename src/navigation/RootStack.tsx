import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { colors } from '../constants/theme';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { View } from 'react-native-animatable';
import Details from '../screens/Details';


const RootStack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Home"
                screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: colors.primary,
                    borderBottomWidth: 0,
                },
                headerTintColor: colors.white,
                headerTitleStyle: { fontFamily: "FontBold" },
                headerShown: true
                }}
            >
                <RootStack.Screen
                    name="Home"
                    component={Home}
                />
                <RootStack.Screen
                    name="Details"
                    component={Details}
                />
            </RootStack.Navigator>
        </NavigationContainer>
        
    );
};
export default React.memo(Navigation);