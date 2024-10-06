import {StyleSheet, Dimensions} from 'react-native';
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#e6eefc",
    },
    icon: {
      width: 35,
      height: 40,
      tintColor: 'black',
      marginRight: 12
    },
    iconThree: {
      width: 35,
      height: 40,
      marginLeft: 45
    },
    header: {
      paddingTop: height * 0.07,
      flexDirection: "row",
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#DDDDDD",
      paddingVertical: 8,
      backgroundColor: "#f2f8fc",
      justifyContent: 'space-between'
    },
    heading: {
      fontWeight: "500",
      paddingLeft: 16,
      fontSize: 20,
    },
    initials: {
      fontWeight: "bold",
      fontSize: 20,
      // marginRight: 10,
    },
    avatarContainer: { borderRadius: 100, padding: 8, marginRight: 25, backgroundColor: '#396ead' },
    name: {
      fontWeight: "500",
      fontSize: 20,
      paddingRight: 25,
      paddingTop: 6
    },
    emoji: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 5,
    },
    messageContainer: {
      backgroundColor: '#f0f0f0',
      borderRadius: 15,
      padding: 10,
      marginVertical: 5,
      maxWidth: '75%', 
      alignSelf: 'flex-start',
    },
    messageLeft: {
      marginLeft: 12,
      alignSelf: 'flex-start',
    },
    messageRight: {
      alignSelf: 'flex-end',
      backgroundColor: '#396ead',
    },
    emojiText: {
      position: 'absolute',
      top: -25,
      fontSize: 24,
      // marginTop: 5,
      // transform: [{ translateX: -20}],
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 15,
    },
    reactionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    optionContainer: {
      flexDirection: 'column',
      // justifyContent: 'space-around',
    },
    optionButton: {
      padding: 10,
    },
    inputToolbar: {
      borderRadius: 16,
      backgroundColor: "#f2f8fc",
      marginHorizontal: 8,
      marginTop: 5,
      borderTopWidth: 0,
      marginBottom: 50,
    },
    sendIcon: {
      marginBottom: 10,
      marginRight: 10,
    },
    sendButton: {
      marginBottom: 10,
      marginRight: 10,
    },
    optionText: {
        paddingLeft: 15
    },
    modalIcon: {
      width: 20,
      height: 20
    },
    modalContainerIcon: {
      flexDirection: 'row',
      margin: 20
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      alignItems: 'center',
      justifyContent: 'center',
  },
  alertBox: {
      width: 300,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      alignItems: 'center',
  },
  alertImage: {
      width: 60,
      height: 60,
      marginBottom: 20,
  },
  alertTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
  },
  alertMessage: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
  },
  alertButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#3FA2F6',
      borderRadius: 10,
      marginRight: 5,
      marginLeft: 5
  },
  alertButtonText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
  },
  });

export default styles;