import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState, version } from 'react'
import Typo from '../components/Typo'
import { verticalScale,scale } from '../../utils/styling'
import {colors,spacingX,spacingY,radius} from '../../constants/theme'
import Button from '../components/Button'
import ModalWrapper from '../components/ModalWrapper'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { ScrollView } from 'react-native-gesture-handler'
import Input from '../components/Input'
import ImageUpload from '../components/ImageUpload'
import useLocalSearchParams from 'expo-router'
import { useRoute } from '@react-navigation/native'
import * as Icons from 'phosphor-react-native'

const WalletModal = () => {
  const [loading,setLoading]=useState(false);
  // const [wallet, setWallet] = useState({
  //   name:"",
  //   image:null
  // })
  const [wallet, setWallet] = useState({})
  

  useEffect(()=>{
    if(oldWallet?.id){
      console.log("Hn id hai!");
      setWallet({
        name:oldWallet?.name,
        image:oldWallet?.image
      })
    }
  },[]);

  // const oldWallet = useLocalSearchParams();
  // console.log("oldWallet: ",oldWallet);
  const route = useRoute();
  const oldWallet = route.params || {};
  console.log("oldWallet: ",oldWallet);

  // const [userData,setUserData]= useState({
  //   name:"John",
  //   email:"johnkhore26@gmail.com",
  //   image:"https://cdn.pixabay.com/photo/2024/03/15/19/51/ai-generated-8635685_1280.png"
  // });
  const onSubmit = async()=>{
    let {name,image}= wallet;
    if(!name.trim() || !image){
      Alert.alert("User","Please fill all the fields");
      return;
    }

    console.log("Good to go")
  }

  const onDelete=async()=>{
    // deleting the wallet with id
    console.log("deleting wallet: ",oldWallet?.id)
  }

  const showDeleteAlert = ()=>{
    Alert.alert("Confirm","Are you sure you want to do this? \nThis action will remove all the transaction related to this wallet",
      [
        {
          text:"Cancel",
          onPress: ()=>{console.log("Cancel Delete")},
          style:'cancel'
        },
        {
          text:"Delete",
          onPress: ()=>onDelete(),
          style:'destructive'
        },
      ]
    )
  }
  
  return (
    <ModalWrapper>
      <View style={styles.container}>
        <Header title={oldWallet?.id ? 'Update Wallet':'New Wallet'} leftIcon={<BackButton/>} style={{marginBottom:spacingY._10}}/>

        {/* form */}
        <ScrollView contentContainerStyle={styles.form}>

          <View style={styles.inputContainer}>
            <Typo style={colors.neutral200}>Wallet Name</Typo>
            <Input
                placeholder="Salary"
                value={wallet.name}
                onChangeText={(value)=>{setWallet({...wallet,name:value})}}
            />
          </View>

          <View style={styles.inputContainer}>
            <Typo style={colors.neutral200}>Wallet Icon</Typo>
            {/* Image Input */}
            <ImageUpload file={wallet.image} onSelect={file=>setWallet({...wallet,image:file})} onClear={()=>setWallet({...wallet,image:null})} placeholder='Upload Image'/>
          </View>

        </ScrollView>
      </View>

      <View style={styles.footer}>
        {
          oldWallet?.id && (
            <Button
              onPress={showDeleteAlert}
              style={{
                backgroundColor:colors.rose,
                paddingHorizontal:spacingX._15
              }}
            >
              <Icons.Trash color={colors.white} size={verticalScale(24)} weight='bold'/>
            </Button>
          )
        }
        <Button onPress={onSubmit} loading={loading} style={{flex:1}}>
          <Typo color={colors.black} fontWeight={'700'}>
            {oldWallet?.id ? 'Update Wallet': 'Add Wallet'}
            </Typo>
        </Button>
      </View>
    </ModalWrapper>
  )
}

export default WalletModal

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