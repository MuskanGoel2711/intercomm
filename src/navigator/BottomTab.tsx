import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Profile from './components/Menu';
import Setting from './components/Favourites';
import LogOut from './components/Account';
import { icons } from '../assets/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

type BottomTabParamList = {
  Home: undefined;
  Account: undefined;
  Favourites: undefined;
  Profile: undefined;
};

type BottomTabProps = {
  navigation: BottomTabNavigationProp<BottomTabParamList>;
  route: RouteProp<BottomTabParamList>;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab: React.FC<BottomTabProps> = ({ navigation }) => {
  const loginButton = () => {
    navigation.navigate('Home');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'HOME',
          tabBarIcon: ({ size }) => (
            <Image style={{ width: size, height: size }} source={icons.Home} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={LogOut}
        options={{
          title: 'ACCOUNT',
          tabBarIcon: () => (
            <Image style={{ width: 25, height: 25 }} source={icons.Account} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Setting}
        options={{
          title: 'FAVORITES',
          tabBarIcon: ({ size }) => (
            <TouchableOpacity onPress={loginButton}>
              <Image style={{ width: size, height: size }} source={icons.Favourites} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'MENU',
          tabBarIcon: ({ size }) => (
            <Image style={{ width: size, height: size }} source={icons.HomeMenu} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
