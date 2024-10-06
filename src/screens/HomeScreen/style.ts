import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 70,
        padding: 20,
        backgroundColor: '#2a5fa1',
    },
    textContainer: {
        flexDirection: 'column',
        paddingRight: 169,
    },
    text: {
        color: 'white',
    },
    icon: {
        height: 40,
        width: 40,
    },
    sectionStyle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingTop: 10,
        position: 'relative',
    },
    searchImage: {
        width: 15,
        height: 15,
        position: 'absolute',
        zIndex: 1,
        left: 20,
        top: 22,
    },
    input: {
        height: 40,
        width: '95%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        paddingLeft: 35,
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
    },
    chatIcon: {
        marginRight: 30,
        marginBottom: 20,
    },
    mainText: {
        fontSize: 25,
        paddingBottom: 12,
    },
    buttonContainer: {
        backgroundColor: '#2a5fa1',
        padding: 15,
    },
    buttonText: {
        color: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
    },
    modalOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        width: '100%',
    },
    modalIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
    },
    modalText: {
        fontSize: 18,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#5c87cc',
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    chatItem: {
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
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
      },
      initialsText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
      },
      chatInfo: {
        flexDirection: 'column',
      },
      chatName: {
        fontSize: 16,
        fontWeight: '500',
      },
      chatPhone: {
        fontSize: 14,
        color: '#777',
      },
});

export default styles;