import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/Welcome'
import SplashScreen from './screens/SplashScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen';
import WalletScreen from './screens/WalletScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import * as Icons from 'phosphor-react-native'
import { verticalScale } from '../utils/styling';
import ProfileModal from './screens/ProfileModal'
import WalletModal from './Modal/WalletModal'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#a3e635',  // Green when focused
        tabBarInactiveTintColor: '#a3a3a3', // Grey when not focused
        tabBarStyle: {
          backgroundColor: '#1A1A1A', // Set the tab bar background color
          borderTopWidth: 0, // Optional: Removes top border line
        },
        tabBarIcon: ({ color, size, focused }) => {
          const iconsMap = {
            HomeScreen: Icons.House,
            WalletScreen: Icons.Wallet,
            StatisticsScreen: Icons.ChartBar,
            ProfileScreen: Icons.User,
          };

          const IconComponent = iconsMap[route.name];

          const weight = focused ? "fill" : "regular";

          return <IconComponent color={color} size={verticalScale(30)} weight={weight} />;
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="StatisticsScreen" component={StatisticsScreen} />
      <Tab.Screen name="WalletScreen" component={WalletScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}



export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileModal" component={ProfileModal} options={{ headerShown: false }} />
        <Stack.Screen name="WalletModal" component={WalletModal} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
