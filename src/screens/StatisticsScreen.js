import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Typo from '../components/Typo'
import { verticalScale } from '../../utils/styling'
import {colors,spacingX,spacingY,radius} from '../../constants/theme'
import Button from '../components/Button'
import * as Icons from 'phosphor-react-native'
import Animated ,{ FadeIn, FadeInDown } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const StatisticsScreen = () => {
  return (
    <ScreenWrapper>
      <Text>StatisticsScreen</Text>
    </ScreenWrapper>
  )
}

export default StatisticsScreen

const styles = StyleSheet.create({})