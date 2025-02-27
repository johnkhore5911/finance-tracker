import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import {colors} from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation= useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace("Welcome");
    },2000)
  },[])
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode='contain'
        source={require("../../assets/splashImage.png")}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:`center`,
    alignItems:`center`,
    backgroundColor:colors.neutral900
  },
  logo:{
    height:"20%",
    aspectRatio:1,
  }
})
