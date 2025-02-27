// import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { ScreenWrapperProps } from '../../types'
// import { colors } from '../../constants/theme'
// import { StatusBar } from 'expo-status-bar'

// const {height} = Dimensions.get('window')

// const ScreenWrapper = ({style,children}: ScreenWrapperProps) => {
//     let paddingTop= Platform.OS == 'ios'? height * 0.06 : 50;
//   return (
//     <View style={[{paddingTop,flex:1,backgroundColor:colors.neutral900},style]}>
//       {/* <Text>ScreenWrapper</Text> */}
//       <StatusBar barStyle="light-content"/>
//       {children}
//     </View>
//   )
// }

// export default ScreenWrapper

// const styles = StyleSheet.create({})

import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/theme';
import { StatusBar } from 'expo-status-bar';

const { height } = Dimensions.get('window');

const ScreenWrapper = ({ style, children }) => {
  // let paddingTop = Platform.OS === 'ios' ? height * 0.06 : 40;
  let paddingTop = Platform.OS === 'ios' ? 1 : 40;


  return (
    <View style={[styles.container, { paddingTop }, style]}>
      <StatusBar style="light" backgroundColor="rgba(255,255,255,0.2)" />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral900,
  },
});

