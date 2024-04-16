
import React, { useState } from 'react'
import { View, Dimensions } from 'react-native';
// @ts-ignore
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { HeaderSection } from '../components/details/HeaderSection';
import { BodySection } from '../components/details/BodySection';
import ForeGround from '../components/details/ForeGround';
import { GlobalStyles } from '../styles/styles';

const Details = () => {
  const {height} = Dimensions.get("screen");
  const parallaxH = parseInt((0.5 * height).toFixed(0));
  return(
    <View style={GlobalStyles.container}>
        <ParallaxScrollView
            backgroundColor="#e8e9f5"
            contentBackgroundColor="#e8e9f5"
            backgroundScrollSpeed={5}
            fadeOutForeground ={true}
            //@ts-ignore
            showsVerticalScrollIndicator ={false}
            parallaxHeaderHeight={parallaxH}
            renderBackground={() => <HeaderSection/>}
            renderContentBackground={() => <BodySection />}
            renderForeground={() => <ForeGround/>}
        />
    </View>
  )
}
export default Details