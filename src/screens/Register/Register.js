// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { auth, db } from '../../../firebaseConfig';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { setDoc, doc } from 'firebase/firestore';

// const Register = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [avatar, setAvatar] = useState('');
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };
//   const handleValidation = () => {
//     let valid = true;
//     let errors = { name: '', email: '', password: '' };

//     if (name.trim() === '') {
//       errors.name = 'Name is required';
//       valid = false;
//     }

//     if (email.trim() === '') {
//       errors.email = 'Email is required';
//       valid = false;
//     } else if (!validateEmail(email)) {
//       errors.email = 'Invalid email format';
//       valid = false;
//     }

//     if (password.trim() === '') {
//       errors.password = 'Password is required';
//       valid = false;
//     } else if (password.length < 6) {
//       errors.password = 'Password should be at least 6 characters';
//       valid = false;
//     }

//     setErrors(errors);
//     return valid;
//   };
//   const handleRegister = async () => {
//     if (handleValidation()) {
//       try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;
//         await updateProfile(user, {
//           displayName: name,
//           photoURL: avatar || 'https://robohash.org/default',
//         });
//         await setDoc(doc(db, "users", user.uid), {
//           uid: user.uid,
//           email: email,
//           name: name,
//           req: [],
//           realFriend: [],
//         });
//         Alert.alert('Registration Successful!', 'You have been registered successfully.');
//         navigation.navigate('Login');
//       } catch (error) {
//         console.error('Error during registration:', error);
//         Alert.alert('Error', error.message);
//       }
//     } else {
//       Alert.alert('Error', 'Please fill in all fields correctly.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Register</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         keyboardType="email-address"
//         onChangeText={(text) => setEmail(text)}
//       />
//       {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         secureTextEntry
//         onChangeText={(text) => setPassword(text)}
//       />
//       {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

//       <TextInput
//         style={styles.input}
//         placeholder="Avatar URL (Optional)"
//         value={avatar}
//         onChangeText={(text) => setAvatar(text)}
//       />

//       <Button
//         title="Register"
//         onPress={handleRegister}
//         disabled={!name || !email || !password}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });

// export default Register;
