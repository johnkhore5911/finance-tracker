import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Typo from '../components/Typo'
import { verticalScale,scale } from '../../utils/styling'
import {colors,spacingX,spacingY,radius} from '../../constants/theme'
import Button from '../components/Button'
import * as Icons from 'phosphor-react-native'
import Animated ,{ FadeIn, FadeInDown } from 'react-native-reanimated'
import { FlashList } from "@shopify/flash-list";
import Loading from '../components/Loading'
import { expenseCategories } from '../../constants/data'

const TransactionList = ({
  data,title,loading,emptyListMessage
}) => {
  const handleClick =()=>{
    // open transaction details in a modal
  }
  return (
    <View style={styles.container}>
      {
        title && (
          <Typo size={20} fontWeight={'500'}>{title}</Typo>
        )
      }
      <View style={styles.list}>
        <FlashList
          data={data}
          renderItem={({ item,index }) => <TransactionItem item={item} index={index} handleClick={handleClick}/>}
          estimatedItemSize={60}
        />
      </View>
      {
        !loading && data.length == 0 && (
          <Typo size={15} color={colors.neutral400} style={{textAlign:"center",marginTop:spacingY._15}}>
            {emptyListMessage}
          </Typo>
        )
      }

      {
        loading && (
          <View style={{top:verticalScale(100)}}>
            <Loading/>
          </View>
        )
      }
    </View>
  )
}

const TransactionItem = ({item,index,handleClick}) =>{
  let category = expenseCategories['transportation']
  const IconComponent = category.icon
  return(
    <View>
      <TouchableOpacity style={styles.row}>
        <View style={[styles.icon,{backgroundColor:category.bgColor}]}>
          {
            IconComponent && (
              <IconComponent size={verticalScale(25)} weight='fill' color={colors.white}/>
            )
          }
        </View>
        <View style={styles.categoryDes}>
          <Typo size={17}>{category.label}</Typo>
          <Typo size={12} color={colors.neutral400} textProps={{numberOfLines:1}}>{item?.description}</Typo>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default TransactionList

const styles = StyleSheet.create({
  container:{
    gap:spacingY._17
  },
  list: { 
    minHeight: 3, 
  }, 
  row: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    gap: spacingX._12, 
    marginBottom: spacingY._12,
    backgroundColor: colors.neutral800, 
    padding: spacingY._10, 
    paddingHorizontal: spacingY._10, 
    borderRadius: radius._17, 
  }, 
  icon: { 
    height: verticalScale (44), 
    aspectRatio: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: radius._12, 
    borderCurve: "continuous", 
  }, 
  categoryDes: { 
    flex: 1, 
    gap: 2.5, 
  }, 
  amountDate: { 
    alignItems: "flex-end", 
    gap: 3, 
  },
})