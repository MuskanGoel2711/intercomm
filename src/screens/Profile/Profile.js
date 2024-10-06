// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   TouchableWithoutFeedback,
//   Alert,
//   Dimensions,
//   StatusBar,
// } from 'react-native';
// import {icons, images} from '../../assets/index';
// import CustomInput from '../../components/ProfileInput/ProfileInput';
// import styles from './style';
// import Calender from './Calender/Calender';
// import PhoneInput from 'react-native-phone-number-input';
// import CustomButton from '../../components/Button/Button';
// import ImageModal from './Modal/ImageModal';
// import GenderModal from './Modal/GenderModal';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// class Profile extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       username: '',
//       birthday: '',
//       gender: '',
//       email: '',
//       selected: '',
//       showCalender: false,
//       showDropDown: false,
//       showGenderModal: false,
//       countryCode: 'US',
//       phoneNumber: '',
//       predefinedNumber: '1234567890',
//       showPhotoModal: false,
//       selectedImage: '',
//       nameError: '',
//       usernameError: '',
//       birthdayError: '',
//       genderError: '',
//       phoneError: '',
//       emailError: '',
//       index:1,
//     };
//     this.nameInputRef = React.createRef();
//     this.usernameInputRef = React.createRef();
//     this.birthdayInputRef = React.createRef();
//     this.genderInputRef = React.createRef();
//     this.emailInputRef = React.createRef();
//     // this.phoneInputRef = React.createRef();
//   }
//   validateName = () => {
//     const {name} = this.state;
//     const lettersOnly = /^[A-Za-z]+$/;
//     if (name === '') {
//       this.setState({nameError: 'Name is required'});
//       return false;
//     } else if (!lettersOnly.test(name)) {
//       this.setState({nameError: 'Only letters are allowed'});
//       return false;
//     } else {
//       this.setState({nameError: ''});
//       return true;
//     }
//   };

//   validateUsername = () => {
//     const {username} = this.state;
//     const lettersOnly = /^[A-Za-z]+$/;

//     if (username === '') {
//       this.setState({usernameError: 'Username is required'});
//       return false;
//     } else if (!lettersOnly.test(username)) {
//       this.setState({usernameError: 'Only letters are allowed'});
//       return false;
//     } else {
//       this.setState({usernameError: ''});
//       return true;
//     }
//   };

//   validateBirthday = () => {
//     const {birthday} = this.state;
//     if (birthday === '') {
//       this.setState({birthdayError: 'Birthday is required'});
//       return false;
//     } else {
//       this.setState({birthdayError: ''});
//       return true;
//     }
//   };

//   validateGender = () => {
//     const {gender} = this.state;
//     const validGenders = ['male', 'female'];
//     if (gender === '') {
//       this.setState({genderError: 'Gender is required'});
//       return false;
//     }else if (!validGenders.includes(gender.toLowerCase())) {
//       this.setState({ genderError: 'Gender must be either "male" or "female"' });
//       return false;
//     } else {
//       this.setState({genderError: ''});
//       return true;
//     }
//   };
//   validatePhoneNumber = () => {
//     const {phoneNumber} = this.state;
//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(phoneNumber)) {
//       this.setState({phoneError: 'Enter a valid 10-digit phone number'});
//       return false;
//     } else {
//       this.setState({phoneError: ''});
//       return true;
//     }
//   };
//   validateEmail = () => {
//     const {email} = this.state;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       this.setState({emailError: 'Enter a valid email address'});
//       return false;
//     } else {
//       this.setState({emailError: ''});
//       return true;
//     }
//   };
//   handleChange = (field, value) => {
//     this.setState({[field]: value}, () => {
//       switch (field) {
//         case 'name':
//           this.validateName();
//           break;
//         case 'username':
//           this.validateUsername();
//           break;
//         case 'birthday':
//           this.validateBirthday();
//           break;
//         case 'gender':
//           this.validateGender();
//           break;
//         case 'phoneNumber':
//           this.validatePhoneNumber();
//           break;
//         case 'email':
//           this.validateEmail();
//           break;
//         default:
//           break;
//       }
//     });
//   };
//   validateAllFields = () => {
//     const isNameValid = this.validateName();
//     const isUsernameValid = this.validateUsername();
//     const isBirthdayValid = this.validateBirthday();
//     const isGenderValid = this.validateGender();
//     const isPhoneValid = this.validatePhoneNumber();
//     const isEmailValid = this.validateEmail();

//     return (
//       isNameValid &&
//       isUsernameValid &&
//       isBirthdayValid &&
//       isGenderValid &&
//       isPhoneValid &&
//       isEmailValid
//     );
//   };
//   renderRightAccessory = () => {
//     return (
//       <TouchableOpacity onPress={this.handleRightAccessoryPress}>
//         <Text style={{ color: '#EE28A9', fontWeight: 'bold' }}>VERIFY</Text>
//       </TouchableOpacity>
//     );
//   };
//   handleSendCode = () => {
//     if(this.state.index == 1 && this.nameInputRef.current){
//       this.usernameInputRef.current.focus();
//       this.setState({index:2})
//     }
//     if(this.state.index == 2 && this.usernameInputRef.current){
//       this.birthdayInputRef.current.focus();
//       this.setState({index:3})
//     }
//     if(this.state.index == 3 && this.birthdayInputRef.current) {
//       this.genderInputRef.current.focus();
//       this.setState({index:4})
//     } 
//     if(this.state.index == 4 && this.genderInputRef.current) {
//       this.emailInputRef.current.focus();
//       this.setState({index:5})
//     }
    
  
//     // if (this.validateAllFields()) {
//     //   // Handle update logic
//     // } else {
//     //   Alert.alert('Error', 'Please correct the errors before updating');
//     // }
//   };
//   onSelect = country => {
//     this.setState({countryCode: country.cca2});
//   };
//   handlePhoneNumberChange = text => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     this.setState({phoneNumber: numericText});
//   };
//   handlePress = () => {
//     this.setState({showCalender: !this.state.showCalender});
//   };
//   handleArrow = () => {
//     this.setState({showGenderModal: true});
//   };
//   handleDateChange = day => {
//     this.setState({birthday: day.dateString, showCalender: false});
//   };
//   handleGenderSelect = selectedGender => {
//     this.setState({gender: selectedGender, showGenderModal: false});
//   };
//   toggleImageModal = () => {
//     this.setState(prevState => ({showPhotoModal: !prevState.showPhotoModal}));
//   };
//   handleImageSelect = imagePath => {
//     this.setState({selectedImage: imagePath, showPhotoModal: false});
//   };
//   toggleGenderModal = () => {
//     this.setState(prevState => ({showGenderModal: !prevState.showGenderModal}));
//   };
//   render() {
//     const {
//       name,
//       username,
//       birthday,
//       gender,
//       email,
//       showCalender,
//       countryCode,
//       phoneNumber,
//       selectedImage,
//       nameError,
//       usernameError,
//       birthdayError,
//       genderError,
//       phoneError,
//       emailError,
//     } = this.state;
//     const isButtonDisabled = !(
//       name &&
//       username &&
//       birthday &&
//       countryCode &&
//       gender &&
//       phoneNumber &&
//       !nameError &&
//       !usernameError &&
//       !birthdayError &&
//       !genderError &&
//       !phoneError &&
//       !emailError
//     );
//     const buttonStyle = isButtonDisabled
//       ? styles.buttonDisabled
//       : styles.buttonContainer;
//       const {height} = Dimensions.get('screen');

//       const isSmallDevice = height <= 667;
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <TouchableOpacity>
//             <Image source={icons.left} style={styles.left} />
//           </TouchableOpacity>
//           <Text style={styles.headerText}>Edit Profile</Text>
//           <View />
//         </View>
//         <View style={styles.profile}>
//           <View style={styles.girlContainer}>
//             <Image
//               source={selectedImage ? {uri: selectedImage} : images.girl}
//               style={styles.girl}
//             />
//           </View>
//           <View style={styles.profileView}>
//             <Text style={styles.profileText}>Profile picture</Text>
//             <TouchableOpacity
//               style={{marginTop: 10}}
//               onPress={this.toggleImageModal}>
//               <Text style={styles.changeText}>Change Photo</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <KeyboardAwareScrollView
//           bounces={false}
//           // extraHeight={270}
//           extraHeight={height * (isSmallDevice ? 0.38 : 0.41)}
//           showsVerticalScrollIndicator={false}>
//         <CustomInput
//           placeholder="Name"
//           input={styles.input}
//           inputContainer={styles.inputContainer}
//           onChangeText={text => this.handleChange('name', text)}
//           value={name}
//           labelOffset={{x1: 165, y1: -5, x0: 170, y0: -1}}
//           // baseColor={'#E7EBF3'}
//           tintColor={'#ccc'}
//           errorMessage={nameError}
//           errorColor={'red'}
//           onSubmitEditing={this.handleSendCode}
//           ref={this.nameInputRef}
//         />
//         <View>
//           <CustomInput
//             placeholder="Username"
//             input={styles.input}
//             inputContainer={styles.inputContainer}
//             onChangeText={text => this.handleChange('username', text)}
//             value={username}
//             labelOffset={{x1: 165, y1: -5, x0: 170, y0: -1}}
//             // baseColor={'#E7EBF3'}
//             tintColor={'#ccc'}
//             errorMessage={usernameError}
//             errorColor={'red'}
//             ref={this.usernameInputRef}
//             onSubmitEditing={this.handleSendCode}
//           />
//         </View>
//         <TouchableWithoutFeedback onPress={this.handlePress}>
//           <View>
//             <CustomInput
//               placeholder="Birthday"
//               input={styles.input}
//               inputContainer={styles.inputContainer}
//               onChangeText={text => this.handleChange('birthday', text)}
//               value={birthday}
//               labelOffset={{x1: 165, y1: -5, x0: 170, y0: -1}}
//               tintColor={'#ccc'}
//               // disabled={true}
//               ref={this.birthdayInputRef}
//               onSubmitEditing={this.handleSendCode}
//             />
//             <View style={styles.iconContainer} >
//               <Image source={icons.calendar} style={styles.iconStyle} />
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//         {showCalender && (
//           <Calender
//             selectedDate={birthday}
//             onDayPress={this.handleDateChange}
//             markedDates={{
//               [birthday]: {
//                 selected: true,
//                 marked: true,
//                 selectedColor: '#00B0FF',
//               },
//             }}
//           />
//         )}
//         <TouchableWithoutFeedback onPress={this.handleArrow}>
//           <View>
//             <CustomInput
//               placeholder="Gender"
//               input={styles.input}
//               inputContainer={styles.inputContainer}
//               onChangeText={text => this.handleChange('gender', text)}
//               value={gender}
//               labelOffset={{x1: 165, y1: -5, x0: 170, y0: -1}}
//               // disabled={true}
//               ref={this.genderInputRef}
//               onSubmitEditing={this.handleSendCode}
//               errorMessage={genderError}
//               errorColor={'red'}
//               tintColor={'#ccc'}
//             />
//             <View style={styles.iconContainer}>
//               <Image source={icons.downArrow} style={styles.iconStyle} />
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//         <GenderModal
//           showGenderModal={this.state.showGenderModal}
//           onClose={this.toggleGenderModal}
//           onGenderSelect={this.handleGenderSelect}
//         />
//         <View>
//           <View style={styles.phoneInput}>
//             <PhoneInput
//               defaultValue={this.state.phoneNumber}
//               defaultCode={this.state.countryCode}
//               // ref={this.phoneInputRef}
//               layout="first"
//               onChangeCountry={this.onSelect}
//               textInputProps={{
//                 value: phoneNumber,
//                 onChangeText: text => this.handleChange('phoneNumber', text),
//                 keyboardType: 'number-pad',
//                 maxLength: 10,
//               }}
//               containerStyle={styles.phoneInputContainer}
//               textContainerStyle={styles.textInputContainer}
//               codeTextStyle={styles.codeText}
//               textInputStyle={styles.phoneText}
//               flagButtonStyle={styles.flagButton}
//             />
//             <TouchableOpacity style={{marginRight: 15}}>
//               <Text style={styles.changeText}>CHANGE</Text>
//             </TouchableOpacity>
//           </View>
//           {phoneError ? (
//             <Text style={styles.errorText}>{phoneError}</Text>
//           ) : null}
//         </View>
//         <View>
//           <CustomInput
//             placeholder=" Email ID"
//             input={styles.input}
//             inputContainer={styles.inputContainer}
//             onChangeText={text => this.handleChange('email', text)}
//             value={email}
//             labelOffset={{x1: 140, y1: -5, x0: 140, y0: -1}}
//             // baseColor={'#E7EBF3'}
//             tintColor={'#ccc'}
//             errorMessage={emailError}
//             errorColor={'red'}
//             renderRightAccessory={this.renderRightAccessory}
//             ref={this.emailInputRef}
//           />
//         </View>
//         <CustomButton
//           style={buttonStyle}
//           buttonBox={styles.buttonBox}
//           onPress={this.handleSendCode}
//           isButtonDisabled={true}
//           text="Update"
//         />
//         </KeyboardAwareScrollView>
//         <ImageModal
//           showPhotoModal={this.state.showPhotoModal}
//           onClose={this.toggleImageModal}
//           onImageSelect={this.handleImageSelect}
//         />
//       </View>
//     );
//   }
// }
// export default Profile;
