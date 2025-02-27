import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import Typo from './Typo'
import { verticalScale } from '../../utils/styling'
import {colors,spacingX,spacingY,radius} from '../../constants/theme'
import * as Icons from 'phosphor-react-native'
import Animated ,{ FadeIn, FadeInDown } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const WalletListItem = ({
  item,index
}) => {
  const navigation=useNavigation();
  const openWallet=()=>{
    navigation.navigate("WalletModal",{id:item?._id,name:item?.name,image:item?.image})
  }
  return (
    <Animated.View entering={FadeInDown.delay(index*50).springify().damping(13)}>
      <TouchableOpacity style={styles.container} onPress={openWallet}>
        <View style={styles.imageContainer}>
          <Image
            style={{flex:1}}
            // source={item?.image}
            source={require("../../assets/card.png")}
            contentFit="cover"
            transition={100}
          />
        </View>
        <View style={styles.nameContainer}>
          <Typo size={16}>{item?.name}</Typo>
          <Typo size={14} style={colors.neutral400}>${item?.amount}</Typo>
        </View>


        <Icons.CaretRight
          size={verticalScale(20)}
          weight="bold"
          color={colors.white}
        />

      </TouchableOpacity>
    </Animated.View>
  )
}

export default WalletListItem

const styles = StyleSheet.create({
  container: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: verticalScale(17), 
    // padding: spacingX.15, 
    }, 
    imageContainer: { 
    height: verticalScale (45), 
    width: verticalScale (45), 
    borderWidth: 1, 
    borderColor: colors.neutral600, 
    borderRadius: radius._12, 
    borderCurve: "continuous", 
    overflow: "hidden", 
    }, 
    nameContainer: { 
    flex: 1, 
    gap: 2, 
    marginLeft: spacingX._10, 
    },
})