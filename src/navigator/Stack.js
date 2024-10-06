import React from 'react';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NewChatScreen from '../screens/NewChatScreen/NewChatScreen';
import Chat from '../screens/Chat/Chat';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
// import TutorialScreen from '../screens/TutorialScreen/TutorialScreen';
import BottomTab from './BottomTab'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const NativeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Register" component={Register} options={{ gestureEnabled: false }} /> */}
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="HomeScreen" component={BottomTab} options={{ gestureEnabled: false }} />
                {/* <Stack.Screen name="TutorialScreen" component={TutorialScreen} /> */}
                <Stack.Screen name="Chat" component={Chat} options={{ gestureEnabled: false }}/>
                {/* <Stack.Screen name="Login" component={Login} options={{ gestureEnabled: false }} /> */}
                <Stack.Screen name="NewChatScreen" component={NewChatScreen} options={{ gestureEnabled: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NativeStack;