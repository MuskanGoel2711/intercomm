import {StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5fcff',
    },
    slide: {
      width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '90%',
      height: 250,
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#555',
      textAlign: 'center',
      paddingHorizontal: 20,
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },
    paginationDot: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: '#007AFF',
      marginHorizontal: 5,
      marginBottom: 100
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
      paddingHorizontal: 20,
    },
    Login: {
      backgroundColor: '#FFFFFF',
      borderRadius: 80
    },
    ViewButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingHorizontal: 45
    }
  });

export default styles;