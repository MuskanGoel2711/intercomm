import React from 'react';
import { View, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './style';
import { images } from '../../assets/index';

type RootStackParamList = {
    HomeScreen: undefined;
};

type SplashScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

class SplashScreen extends React.Component<SplashScreenProps> {
    constructor(props: SplashScreenProps) {
        super(props);
    }

    async componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('HomeScreen');
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }],
            });
        }, 2000);
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.RootView}>
                    <View style={styles.ChildView}>
                        <Image source={images.logo} style={styles.gif} />
                    </View>
                </View>
            </View>
        );
    }
}

export default SplashScreen;
