import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Typo from '../components/Typo'
import { verticalScale } from '../../utils/styling'
import {colors,spacingX,spacingY,radius} from '../../constants/theme'
import BackButton from '../components/BackButton';
import Input from '../components/Input'
import * as Icons from 'phosphor-react-native'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigation = useNavigation();
  const [isLoading,setIsLoading] = useState(false);
  const handleSubmit = async()=>{
    if(!email || !password || !name){
      Alert.alert('Sign up',"Please fill all the fields");
      return;
    }
    console.log("Name: ",name)
    console.log("Email: ",email)
    console.log("Password: ",password)
    console.log("Good to go")
    navigation.replace("Main");

  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* backButton */}
        <BackButton iconSize={28}/>


        <View style={{gap:5,marginTop:spacingY._20}}>
          <Typo size={30} fontWeight={'800'}>Lets,</Typo>
          <Typo size={30} fontWeight={'800'}>Get Started</Typo>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>Create an Account to track all your expenses</Typo>
          {/* custom input */}
          <Input
            placeholder="Enter your name" 
            icon={<Icons.User size={verticalScale(26)} 
            color={colors.neutral300} 
            weight='fill'/>}
            onChangeText={(value) => (setName(value))}
          />
          <Input
            placeholder="Enter your email" 
            icon={<Icons.At size={verticalScale(26)} 
            color={colors.neutral300} 
            weight='fill'/>}
            onChangeText={(value) => (setEmail(value))}
          />
          <Input 
            placeholder="Enter your password" 
            secureTextEntry={true}
            icon={<Icons.Lock size={verticalScale(26)}  
            color={colors.neutral300} 
            weight='fill'/>}
            onChangeText={(value) => (setPassword(value))}
          />

          <Button loading={isLoading} onPress={handleSubmit}>
            <Typo fontWeight={'700'} color={colors.black} size={21}>Sign up</Typo>
          </Button>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Typo size={15}>Already have an account?</Typo>
          <Pressable onPress={()=> {navigation.navigate("Login")}}>
            <Typo size={15} fontWeight={'700'} color={colors.primary}>Login</Typo>
          </Pressable>
        </View>

      </View>
    </ScreenWrapper> 
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    gap:spacingY._30,
    paddingHorizontal:spacingX._20
  },
  welcomeText: { 
    fontSize: verticalScale(20), 
    fontWeight: "bold", 
    color: colors.text, 
    },
    form: { 
    gap: spacingY._20, 
    }, 
    forgotPassword: { 
    textAlign: "right", 
    fontWeight: "500", 
    color: colors.text, 
    }, 
    footer: { 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    gap: 5, 
    }, 
    footerText: { 
    textAlign: "center", 
    color: colors.text, 
    fontSize: verticalScale(15), 
    }, 
})