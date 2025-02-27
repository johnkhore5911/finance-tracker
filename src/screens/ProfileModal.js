import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, version } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Typo from '../components/Typo'
import { verticalScale,scale } from '../../utils/styling'
import {colors,spacingX,spacingY,radius} from '../../constants/theme'
import Button from '../components/Button'
import * as Icons from 'phosphor-react-native'
import Animated ,{ FadeIn, FadeInDown } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import ModalWrapper from '../components/ModalWrapper'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { ScrollView } from 'react-native-gesture-handler'
import {Image} from 'expo-image'
import Input from '../components/Input'
import * as ImagePicker from 'expo-image-picker';

const ProfileModal = () => {
  const [loading,setLoading]=useState(false);
  const [userData,setUserData]= useState({
    name:"John",
    email:"johnkhore26@gmail.com",
    image:"https://cdn.pixabay.com/photo/2024/03/15/19/51/ai-generated-8635685_1280.png"
  });
  const onSubmit = async()=>{
    let {name,image}= userData;
    if(!name.trim()){
      Alert.alert("User","Please fill all the fields");
      return;
    }

    console.log("Good to go")
  }


  const onPickImage = async () => {
    console.log("hiii ");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Correct media type
      quality: 0.5,
    });
  
    console.log(result);
  
    if (!result.canceled) {
      setUserData((prev) => ({
        ...prev,
        image: result.assets[0].uri,  // Only store the `uri`
      }));
    }
  };
  
  
  return (
    <ModalWrapper>
      <View style={styles.container}>
        <Header title='Update Profile' leftIcon={<BackButton/>} style={{marginBottom:spacingY._10}}/>

        {/* form */}
        <ScrollView contentContainerStyle={styles.form}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={userData.image}
              contentFit='cover'
              transition={100}
            />
            <TouchableOpacity onPress={onPickImage} style={styles.editIcon}>
              <Icons.Pencil
                size={verticalScale(20)}
                color={colors.neutral800}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Typo style={colors.neutral200}>Name</Typo>
            <Input
                placeholder="Name"
                value={userData.name}
                onChangeText={(value)=>{setUserData({...userData,name:value})}}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Button onPress={onSubmit} loading={loading} style={{flex:1}}>
          <Typo color={colors.black} fontWeight={'700'}>Update</Typo>
        </Button>
      </View>
    </ModalWrapper>
  )
}

export default ProfileModal

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-between",
    paddingHorizontal:spacingY._20,

  },
  footer: { 
    alignItems: "center", 
    flexDirection: "row", 
    justifyContent: "center", 
    paddingHorizontal: spacingX._20, 
    gap: scale(12), 
    paddingTop: spacingY._15, 
    borderTopColor: colors.neutral700, 
    marginBottom: spacingY._5, 
    borderTopWidth: 1, 
  }, 
  form: { 
    gap: spacingY._30, 
    marginTop: spacingY._15, 
  }, 
  avatarContainer: { 
    position: "relative", 
    alignSelf: "center", 
  },
  avatar:{
    height:verticalScale(135),
    width: verticalScale (135), 
    borderRadius: 200, 
    borderWidth: 1, 
    borderColor: colors.neutral500, 
    // overflow: "hidden", 
    // position: "relative", 
  }, 
  editIcon: { 
    position: "absolute", 
    bottom: spacingY._5, 
    right: spacingY._7, 
    borderRadius: 100, 
    backgroundColor: colors.neutral100, 
    shadowColor: colors.black, 
    shadowoffset: { width: 0, height: 0}, 
    shadowOpacity: 0.25, 
    shadowRadius: 10, 
    elevation: 4, 
    padding: spacingY._7, 
  }, 
  inputContainer: { 
    gap: spacingY._10, 
  },
})