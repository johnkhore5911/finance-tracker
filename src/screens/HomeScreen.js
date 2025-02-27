import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Typo from '../components/Typo'
import { verticalScale } from '../../utils/styling'
import {colors,spacingX,spacingY,radius} from '../../constants/theme'
import Button from '../components/Button'
import * as Icons from 'phosphor-react-native'
import Animated ,{ FadeIn, FadeInDown } from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'
import HomeCard from '../components/HomeCard'
import TransactionList from '../components/TransactionList'
const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <View style={40}>
            <Typo size={16} color={colors.neutral400}>Hello,</Typo>
            <Typo size={20} fontWeight={'500'}>John</Typo>
          </View>
          <TouchableOpacity style={styles.searchIcon}>
            <Icons.MagnifyingGlass size={verticalScale(22)} color={colors.neutral200} weight='bold'/>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}
        >
          {/* card */}
          <View>
            <HomeCard/>
          </View>

          <TransactionList title="Recent Transactions" data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]} loading={false} emptyListMessage={"No Transaction added yet!"}/>
        </ScrollView>
      </View>
    </ScreenWrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:spacingX._20,
    marginTop:verticalScale(8)
  },
  header: {
    flexDirection:"row",
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: spacingY._10, 
  }, 
  searchIcon: { 
    backgroundColor: colors.neutral700, 
    padding: spacingX._10, 
    borderRadius: 50, 
  }, 
  floatingButton: { 
    height: verticalScale(50), 
    width: verticalScale(50), 
    borderRadius: 100, 
    position: "absolute", 
    bottom: verticalScale(30), 
    right: verticalScale(30), 
  }, 
  scrollViewStyle:{
    marginTop: spacingY._10, 
    paddingBottom: verticalScale(100), 
    gap: spacingY._25,
  }
})