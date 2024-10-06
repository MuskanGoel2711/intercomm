import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class LogOut extends React.Component{
    constructor(props){
        super(props);
    }
    loginButton = () => {
        this.props.navigation.navigate('Login');
    }
    render(){
        return(
            <View style={styles.send}>
                <Button title='SEND' onPress={this.loginButton} style={{borderWidth: 2,borderColor: 'black'}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    send: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})