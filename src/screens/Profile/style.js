import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/Dimensions';
export default styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 50,
    },
    left: {
      width: vw(20),
      height: vh(20),
      marginLeft: 20,
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    profile: {
      flexDirection: 'row',
      marginBottom: 18,
    },
    girlContainer: {
      width: vw(140),
      height: vh(140),
      aspectRatio: 1,
      backgroundColor: '#D2E0FB',
      borderRadius: 100,
      margin: 10,
    },
    girl: {
      width: '100%',
      height: '100%',
      borderRadius: 100,
    },
    profileView: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 12,
    },
    profileText: {color: '#4B5879',fontSize: 14},
    changeText: {color: '#EE28A9',fontSize:16},
    input: {
      backgroundColor: '#FFFFFF',
      paddingBottom: 20,
      borderColor: '#E7EBF3',
      borderWidth: 1,
      marginHorizontal: 15,
      marginBottom: 8,
    },
    inputContainer: {
      // flexDirection: 'row',
      position: 'relative',
    },
    iconContainer: {
      position: 'absolute',
      right: 26,
      top: 19,
    },
    iconStyle: {
      width: vw(20),
      height: vh(20),
      // tintColor: '#000',
    },
    phoneInput: {
      borderWidth: 1,
      borderColor: '#E7EBF3',
      borderRadius: 8,
      marginHorizontal: 15,
      marginBottom: 20,
      flexDirection:'row',
      justifyContent: 'center',
      // paddingLeft: 17,
      // paddingRight:17
    },
    phoneInputContainer: {
      backgroundColor: 'transparent',
      paddingLeft:20
    },
    changeText: {paddingTop: 18,paddingRight:18, color:'#EE28A9'},
    textInputContainer: {
      backgroundColor: 'transparent',
    },
    buttonBox: {flex: 1, justifyContent: 'flex-start'},
    errorText: {
      color: 'red',
      marginLeft: 15,
      marginTop: -10,
      marginBottom: 10,
    },
    buttonContainer: {
      alignItems: 'center',
      backgroundColor: '#0F67B1',
      borderRadius: 7,
      marginHorizontal: 20,
      padding: 15,
      width: '90%',
    },
    buttonDisabled: {
      alignItems: 'center',
      backgroundColor: '#96C9F4',
      borderRadius: 7,
      marginHorizontal: 20,
      padding: 15,
      width: '90%',
    },
    modalContainer: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    modalOption: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    modalCloseButton: {
      marginTop: 20,
      padding: 10,
      alignItems: 'center',
      backgroundColor: '#ccc',
      borderRadius: 5,
    },
    modalCloseText: {
      color: '#000',
      fontWeight: 'bold',
    },
    modalContainer1: {
      flex: 1,
      justifyContent: 'flex-end',
      // alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: '100%',
    },
    modalContent1: {
      height: '45%',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 30,
    },
    modalTitle1: {
      fontSize: 24,
      fontWeight: '700',
      marginLeft: 15,
    },
    lineView: {
      borderWidth: 0.5,
      borderColor: 'lightgrey',
      marginVertical: 20,
    },
    galleryview: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 24,
      paddingHorizontal: 23,
      paddingVertical: 17,
    },
    containerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#F6F9FA',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#F6F9FA',
      padding:10
    },
    marginSpace: {
      marginBottom: 12,
    },
    containerTop1: {
      flexDirection: 'row',
    },
    imgSize: {
      height: vh(53),
      width: vw(44),
    },
    forwardContainer: {
      justifyContent: 'center',
      marginRight: 20,
    },
    imgForward: {
      width: vw(6),
      height: vh(10),
    },
    containerTop2: {
      flexDirection: 'column',
      marginStart: 14,
      justifyContent: 'center',
    },
    textName: {
      fontSize: 16,
      fontWeight: '500',
      color: '#000000CC',
    },
    text2: {
      fontSize: 14,
      fontWeight: '600',
      color: '#2A7BBB',
      marginTop: 10,
    },
    headingDescription: {
      marginTop: 8,
      color: '#4D5876',
      fontWeight: '400',
      fontSize: 15,
    },
    marginSide: {
      marginTop: 36,
      marginHorizontal: 24,
    },
    iconSize: {
      height: vh(55),
      width: vw(55),
      resizeMode: 'center',
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerText: {
      fontWeight: '500',
      fontSize: 14,
      color: '#122636',
      marginTop: -2,
      marginStart: 4,
    },
    closeButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: 'blue',
      alignItems: 'center',
      borderRadius: 5,
    },
    closeButtonText: {
      color: 'white',
      fontSize: 16,
    },
  });