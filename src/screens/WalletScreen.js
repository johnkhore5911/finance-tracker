import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Typo from '../components/Typo'
import { verticalScale } from '../../utils/styling'
import {colors,spacingX,spacingY,radius} from '../../constants/theme'
import Button from '../components/Button'
import * as Icons from 'phosphor-react-native'
import Animated ,{ FadeIn, FadeInDown } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading'
import { FlatList } from 'react-native-gesture-handler'
import WalletListItem from '../components/WalletListItem'

const WalletScreen = () => {
  const navigation=useNavigation();
  const gettotalBalance = ()=>{
    return 2390;
  }

  const [walletList,setWalletList]=useState([
  {_id:"12345",name:"Main Income",amount:2400,image:null },
  {_id:"12346",name:"Freelancing",amount:1560,image:null },
  ]);
  const [loading,setLoading]=useState(false);
  return (
    <ScreenWrapper style={{backgroundColor:colors.black}}>
      <View style={styles.container}>
        {/* balance view */}
        <View style={styles.balanceView}>
          <View style={{alignItems:`center`}}>
            <Typo size={45} fontWeight={'500'}>
              ${gettotalBalance()?.toFixed(2)}
            </Typo>
            <Typo size={16} color={colors.neutral300}>Total Balance</Typo>
          </View>
        </View>

        {/* Wallet */}
        <View style={styles.wallets}>
          {/* header */}
          <View style={styles.flexRow}>
            <Typo size={20} fontWeight={'500'}>My Wallets</Typo>
            <TouchableOpacity onPress={()=>{navigation.navigate("WalletModal")}}>
              <Icons.PlusCircle weight='fill' color={colors.primary} size={verticalScale(33)}/>
            </TouchableOpacity>
          </View>

          {/* todo: wallets list */}

          {loading && <Loading/>}
          <FlatList
           data={walletList}
           renderItem={({item,index})=>{
            return <WalletListItem item={item} index={index}/>
           }}
           contentContainerStyle={styles.listStyle}
          />


        </View>
      </View>
    </ScreenWrapper> 
  )
}

export default WalletScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-between"
  },
  balanceView: { 
    height:verticalScale(160),
    backgroundColor: colors.black, 
    justifyContent: "center", 
    alignItems: "center", 
    }, 
    flexRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: spacingY._10, 
    }, 
    wallets: { 
    flex: 1, 
    backgroundColor: colors.neutral900, 
    borderTopRightRadius: radius._30, 
    borderTopLeftRadius: radius._30, 
    padding: spacingX._20, 
    paddingTop: spacingX._25, 
    }, 
    listStyle: { 
    paddingVertical: spacingY._25, 
    paddingTop: spacingY._15,
    }
})