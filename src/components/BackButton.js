import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CaretLeft } from 'phosphor-react-native';
import { colors, radius } from '../../constants/theme'
import { verticalScale } from '../../utils/styling';
const BackButton = ({
  style,
  iconSize=26
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={[styles.button,style]}>
      <CaretLeft
      size={verticalScale(iconSize)}
      color={colors.white}
      weight="bold"
      />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
  button:{
    backgroundColor:colors.neutral600,
    alignSelf:"flex-start",
    borderRadius:radius._12,
    borderCurve:"continuous",
    padding:5
  }
})