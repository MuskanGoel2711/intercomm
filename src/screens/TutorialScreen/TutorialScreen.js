import React from 'react';
import { View, Text, Image, Button, FlatList, Dimensions} from 'react-native';
import styles from './style';
const { width } = Dimensions.get('window');
const tutorialData = [
  {
    key: '1',
    title: 'Welcome to the App',
    description: 'This is the first step of our tutorial.',
    image: 'https://www.shutterstock.com/image-vector/system-updates-people-updating-operation-260nw-1355744153.jpg',
  },
  {
    key: '2',
    title: 'Explore Features',
    description: 'Swipe through to learn about the features.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bfb41f157906697.63818d61d00c6.jpg',
  },
  {
    key: '3',
    title: 'Get Started',
    description: 'Ready to begin? Let\'s go!',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d3ddcb185405133.656395c7f2193.png',
  },
];

class TutorialScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.flatListRef = React.createRef();
  }
  handleNext = () => {
    const nextIndex = this.state.currentIndex + 1;
    if (nextIndex < tutorialData.length) {
      this.flatListRef.current.scrollToIndex({ index: nextIndex });
      this.setState({ currentIndex: nextIndex });
    } else {
      this.endTutorial();
    }
  };

  endTutorial = () => {
    this.props.navigation.navigate('Login')
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };
  endTutorialLogin = () => {
    this.props.navigation.navigate('Register')
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'Register' }],
    });
  };

  renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  render() {
    const { currentIndex } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          ref={this.flatListRef}
          data={tutorialData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.key}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / width);
            this.setState({ currentIndex: index });
          }}
        />
        <View style={styles.pagination}>
          {tutorialData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                { opacity: index === currentIndex ? 1 : 0.3 },
              ]}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          {currentIndex === tutorialData.length - 1 ? (
            <View style={styles.ViewButton}>
              <Button title="Login" onPress={this.endTutorial} style={styles.Login} />
              <Button title="Register" onPress={this.endTutorialLogin} style={styles.Login} />
            </View>

          ) : (
            <Button title="Next" onPress={this.handleNext} />
          )}
        </View>
      </View>
    );
  }
}



export default TutorialScreen;
