import { Href } from "expo-router";
import { Firestore, Timestamp } from "firebase/firestore";
import { Icon } from "phosphor-react-native";
import React from "react";
import {
  ActivityIndicator,
  ImageStyle,
  TextInput,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

// ScreenWrapperProps
export const ScreenWrapperProps = {
  style: null, // ViewStyle
  children: null, // React children
};

// ModalWrapperProps
export const ModalWrapperProps = {
  style: null,
  children: null,
  bg: "", // Background color
};

// Account option type
export const accountOptionType = {
  title: "", // String
  icon: null, // React Node (Icon component)
  bgColor: "", // Background color
  routeName: null, // Any route
};

// Typography component props
export const TypoProps = {
  size: null,
  color: "",
  fontWeight: null, // Can be 'bold', 'normal', etc.
  children: null,
  style: null, // TextStyle
  textProps: null, // TextProps
};

// Icon Component Props
export const IconComponent = {
  height: null,
  width: null,
  strokeWidth: null,
  color: "",
  fill: "",
};

// IconProps
export const IconProps = {
  name: "",
  color: "",
  size: null,
  strokeWidth: null,
  fill: "",
};

// HeaderProps
export const HeaderProps = {
  title: "",
  style: null,
  leftIcon: null, // React Node
  rightIcon: null, // React Node
};

// BackButtonProps
export const BackButtonProps = {
  style: null,
  iconSize: null,
};

// TransactionType
export const TransactionType = {
  id: "",
  type: "",
  amount: 0,
  category: "",
  date: new Date(), // Can be Date, Timestamp, or string
  description: "",
  image: null,
  uid: "",
  walletId: "",
};

// CategoryType
export const CategoryType = {
  label: "",
  value: "",
  icon: Icon,
  bgColor: "",
};

// ExpenseCategoriesType (Object containing categories)
export const ExpenseCategoriesType = {};

// TransactionListType
export const TransactionListType = {
  data: [], // Array of TransactionType
  title: "",
  loading: false,
  emptyListMessage: "",
};

// TransactionItemProps
export const TransactionItemProps = {
  item: TransactionType,
  index: 0,
  handleClick: () => {}, // Function
};

// InputProps
export const InputProps = {
  icon: null, // React Node
  containerStyle: null, // ViewStyle
  inputStyle: null, // TextStyle
  inputRef: null, // Reference to TextInput
};

// CustomButtonProps
export const CustomButtonProps = {
  style: null,
  onPress: () => {}, // Function
  loading: false,
  children: null, // React children
};

// ImageUploadProps
export const ImageUploadProps = {
  file: null,
  onSelect: (file) => {}, // Function to handle file select
  onClear: () => {}, // Function to clear selection
  containerStyle: null,
  imageStyle: null,
  placeholder: "",
};

// UserType
export const UserType = {
  uid: "",
  email: "",
  name: "",
  image: null,
};

// UserDataType
export const UserDataType = {
  name: "",
  image: null,
};

// AuthContextType
export const AuthContextType = {
  user: UserType,
  setUser: () => {}, // Function
  login: async (email, password) => {
    return { success: false, msg: "Not implemented" };
  },
  register: async (email, password, name) => {
    return { success: false, msg: "Not implemented" };
  },
  updateUserData: async (userId) => {},
};

// ResponseType
export const ResponseType = {
  success: false,
  data: null,
  msg: "",
};

// WalletType
export const WalletType = {
  id: "",
  name: "",
  amount: 0,
  totalIncome: 0,
  totalExpenses: 0,
  image: null,
  uid: "",
  created: new Date(),
};
