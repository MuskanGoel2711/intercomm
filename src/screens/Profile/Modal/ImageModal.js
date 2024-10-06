import React from 'react';
import {Text,View,Image,Modal,ScrollView,TouchableOpacity,Alert,TouchableWithoutFeedback} from 'react-native';
import styles from '../style';
import {icons} from '../../../assets/index';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ImageModal extends React.Component {
    constructor(props){
        super(props);
    }

  takePhotoFromCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      this.props.onImageSelect(image.path);
    } catch (error) {
      Alert.alert('Error', 'Failed to capture image');
      console.log(error);
    }
  };

  choosePhotoFromGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      this.props.onImageSelect(image.path); 
    } catch (error) {
      Alert.alert('Error', 'Failed to select image from gallery');
      console.log(error);
    }
  };
  modalOptions = [
    {
      id: 1,
      text: 'Upload from Gallery',
      icon: icons.galleryModal,
      onPress: this.choosePhotoFromGallery,
    },
    {
      id: 2,
      text: 'Use Camera',
      icon: icons.cameraModal,
      onPress: this.takePhotoFromCamera,
    },
    {
      id: 3,
      text: 'Select an Avatar',
      icon: icons.avatarModal,
      onPress: () => Alert.alert('Avatar', 'Avatar option selected'),
    }
  ];

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.showPhotoModal}
        animationType="slide"
        onRequestClose={this.props.onClose}>
        <TouchableWithoutFeedback onPress={this.props.onClose}>
          <View style={styles.modalContainer1}>
            <View style={styles.modalContent1}>
              <Text style={styles.modalTitle1}>Profile Photo</Text>
              <View style={styles.lineView}></View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {this.modalOptions.map(option => (
                  <TouchableOpacity key={option.id} onPress={option.onPress}>
                    <View style={styles.containerTop}>
                      <View style={styles.containerTop1}>
                        <Image source={option.icon} style={styles.imgSize} />
                        <View style={styles.containerTop2}>
                          <Text style={styles.textName}>{option.text}</Text>
                        </View>
                      </View>
                      <View style={styles.forwardContainer}>
                        <Image source={icons.sidearrowModal} style={styles.imgForward} />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
