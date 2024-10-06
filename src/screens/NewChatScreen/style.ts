import {StyleSheet} from 'react-native';
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#e6eefc",
    },
    icon: {
      width: 35,
      height: 40,
      tintColor: 'grey',
      marginRight: 12,
      backgroundColor: 'white'
    },
    searchInput: {
      flex: 1,
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: 'white'
    },
    chatIcon: {
      width: 150,
      height: 150
    },
    noResults: {
      fontSize: 16,
      color: 'blue',
      textAlign: 'center',
      marginTop: 20,
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    initialsContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: getRandomColor(),
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15,
    },
    initialsText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#555',
    },
    userInfo: {
      flexDirection: 'column',
    },
    userName: {
      fontSize: 16,
      fontWeight: '500',
    },
    userPhone: {
      fontSize: 14,
      color: '#777',
    },
  });
export default styles;