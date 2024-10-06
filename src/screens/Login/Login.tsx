// import React, {useState} from 'react';
// import {
//   View,
//   TextInput,
//   Button,
//   StyleSheet,
//   Text,
//   Alert,
//   FlatList,
// } from 'react-native';
// import {auth} from '../../../firebaseConfig';
// import {signInWithEmailAndPassword} from 'firebase/auth';
// import {NavigationProp, useNavigation} from '@react-navigation/native';
// // import {ScreenNames} from '../../navigator/screensName';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {GiftedChat} from 'react-native-gifted-chat';

// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   // const navigation = useNavigation<NavigationProp<NavigationType>>();
//   type RootStackType = {
//     Home: string;
//   };

//   const [messages, setMessages] = useState<any>([
//     {
//       //message id
//       _id: 1,
//       text: 'Hello developer',
//       createdAt: new Date(),

//       //user id
//       user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: 'https://placeimg.com/140/140/any',
//       },
//     },
//     {
//       //message id
//       _id: 'f7b386ca-e28b-4511-923a-8017df2d6043',
//       text: 'sdfsdfsdf',

//       //user id
//       user: {_id: 1},
//     },
//   ]);

//   React.useEffect(() => {
//     setMessages([
//       {
//         //message id
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),

//         //user id
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//       {
//         //message id
//         _id: 'f7b386ca-e28b-4511-923a-8017df2d6043',
//         text: 'sdfsdfsdf',

//         //user id
//         user: {_id: 1},
//       },
//     ]);
//   }, []);

//   // [{"_id": "f7b386ca-e28b-4511-923a-8017df2d6043", "createdAt": 2024-10-03T12:42:40.957Z, "text": "sdfsdfsdf", "user": {"_id": 1}}]

//   const navigation = useNavigation<NavigationProp<RootStackType>>();

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter both email and password');
//       return;
//     }

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password,
//       );

//       navigation.navigate(ScreenNames.Home);

//       await AsyncStorage.setItem('isLogin', 'true');
//     } catch (error) {
//       if (error instanceof Error) Alert.alert('Login Error', error.message);
//     }
//   };

//   const onSend = React.useCallback((messages = []) => {
//     setMessages((previousMessages: any) =>
//       GiftedChat.append(previousMessages, messages),
//     );
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={{height: 100, borderWidth: 1}}></View>
//       <GiftedChat
//         messages={messages}
//         onSend={messages => {
//           console.log('messages', messages);
//           onSend(messages);
//         }}
//         user={{
//           _id: 1,
//         }}
//       />
//     </View>
//   );
// };

// //firstore array -> local
// //empty reflect when there is no text to search
// //while searching use state, use include to search particular string, [...]/filter

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor: '#f2f2f2',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
// });

// export default Login;