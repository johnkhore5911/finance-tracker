import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import Typo from '../components/Typo'
import { verticalScale,scale } from '../../utils/styling'
import {colors,spacingX,spacingY,radius} from '../../constants/theme'
import Button from '../components/Button'
import * as Icons from 'phosphor-react-native'
import Animated ,{ FadeIn, FadeInDown } from 'react-native-reanimated'

const HomeCard = () => {
  return (
    <ImageBackground
      source={require("../../assets/card.png")}
      resizeMode='stretch'
      style={styles.bgImage}
    >
      {/* <Typo>HomeCard</Typo> */}
      <View style={styles.container}>
        <View>
          {/* total balance */}
          <View style={styles.totalBalanceRow}>
            <Typo color={colors.neutral800} size={17} fontWeight={'500'}>
              Total Balance
            </Typo>
            <Icons.DotsThreeOutline size={verticalScale(23)} color={colors.black} weight='fill'/>
          </View>
          
          <Typo color={colors.black} size={30} fontWeight={'bold'}>
            $2343.53
          </Typo>
        </View>

        {/* expenses and incomes */}
        <View style={styles.stats}>
          {/* income */}
          <View style={{gap:verticalScale(5)}}>
            <View style={styles.incomeExpense}>
              <View style={styles.statsIcon}>
                <Icons.ArrowDown size={verticalScale(15)} color={colors.black} weight="bold"/>
              </View>
              <Typo size={16} color={colors.neutral700} fontWeight={'500'}>Income</Typo>
            </View>
            <View style={{alignSelf:`center`}}>
              <Typo size={17} color={colors.green} fontWeight={'600'}>$2342</Typo>
            </View>
          </View>

          {/* expense */}
          <View style={{gap:verticalScale(5)}}>
            <View style={styles.incomeExpense}>
              <View style={styles.statsIcon}>
                <Icons.ArrowUp size={verticalScale(15)} color={colors.black} weight="bold"/>
              </View>
              <Typo size={16} color={colors.neutral700} fontWeight={'500'}>Expense</Typo>
            </View>
            <View style={{alignSelf:`center`}}>
              <Typo size={17} color={colors.rose} fontWeight={'600'}>$442</Typo>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default HomeCard

const styles = StyleSheet.create({
  bgImage: { 
    height: scale(210), 
    width: "100%", 
  }, 
  container:{ 
    padding: spacingX._20,
    paddingHorizontal: scale(23),
    height: "87%",
    width: "100%",
    justifyContent: "space-between",
  },
  totalBalanceRow: { 
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center", 
    marginBottom: spacingY._5, 
  }, 
  stats: { 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }, 
  statsIcon: { 
    backgroundColor: colors.neutral350, 
    padding: spacingY._5, 
    borderRadius: 50, 
  }, 
  incomeExpense: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: spacingY._7, 
  }
})