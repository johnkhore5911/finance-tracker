import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Icons from 'phosphor-react-native'
import { colors, radius } from '../../constants/theme'
import Typo from './Typo'
import { scale, verticalScale } from '../../utils/styling'
import * as ImagePicker from 'expo-image-picker';
import {getFilePath} from '../services/imageService'
import { Image } from 'expo-image';

const ImageUpload = ({
  file=null,
  onSelect,
  onClear,
  containerStyle,
  imageStyle,
  placeholder=""
}) => {

  const onPickImage = async () => {
    console.log("hiii ");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Correct media type
      quality: 0.5,
      allowsEditing: true,
    });
  
    console.log(result);
  
    if (!result.canceled) {
      // setUserData((prev) => ({
      //   ...prev,
      //   image: result.assets[0].uri,  // Only store the `uri`
      // }));
      onSelect(result.assets[0].uri)
    }
  };

  return (
    <View>
      {
        !file && (
          <TouchableOpacity onPress={onPickImage} style={[styles.InputContainer,containerStyle && containerStyle]}>
            <Icons.UploadSimple color={colors.neutral200}/>
            {placeholder && <Typo size={15}>{placeholder}</Typo>}
          </TouchableOpacity>
        )
      }

      {
        file && (
          <View style={[styles.image,imageStyle && imageStyle]}>
            <Image
             style={{flex:1}}
             source={getFilePath(file)}
             contentFit="cover"
             transition={1000}
            />

            <TouchableOpacity style={styles.deleteIcon} onPress={onClear}>
              <Icons.XCircle
                size={verticalScale(24)}
                weight='fill'
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
        )
      }
    </View>
  )
}

export default ImageUpload

const styles = StyleSheet.create({
  InputContainer:{
    height:verticalScale(54),
    backgroundColor:colors.neutral700,
    borderRadius:radius._15,
    flexDirection:'row',
    justifyContent:`center`,
    alignItems:"center",
    gap:10,
    borderWidth:1,
    borderColor:colors.neutral500,
    borderStyle:"dashed"
  },
  image:{
    height:scale(150),
    weight:scale(150),
    borderRadius:radius._15,
    borderCurve:"continuous",
    overflow:"hidden"
  },
  deleteIcon:{
    position:'absolute',
    top:scale(6),
    right:scale(6),
    shadowColor:colors.black,
    shadowOffset:{width:0,height:5},
    shadowOpacity:1,
    shadowRadius:10
  }
})