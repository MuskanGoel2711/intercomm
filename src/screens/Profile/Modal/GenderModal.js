import React from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from '../style';
import {icons} from '../../../assets/index';

export default class GenderModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleGenderSelect = (gender) => {
    this.props.onGenderSelect(gender);
  };
  render() {
    const genderOptions = [
      { label: 'Male', image: icons.male },
      { label: 'Female', image:  icons.female},
    ];

    return (
      <Modal
        transparent={true}
        visible={this.props.showGenderModal}
        animationType="slide"
        onRequestClose={this.props.onClose}
      >
        <TouchableWithoutFeedback onPress={this.props.onClose}>
          <View style={styles.modalContainer1}>
            <View style={styles.modalContent1}>
              <Text style={styles.modalTitle1}>Select Gender</Text>
              <View style={styles.lineView}></View>

              {genderOptions.map((gender, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.handleGenderSelect(gender.label)}
                  style={styles.containerTop}
                >
                  <View style={styles.containerTop1}>
                    <Image 
                      source={gender.image} 
                      style={styles.imgSize}  
                    />
                    <View style={styles.containerTop2}>
                      <Text style={styles.textName}>{gender.label}</Text>
                    </View>
                    
                  </View>
                  <View style={styles.forwardContainer}>
                    <Image
                      source={icons.sidearrowModal}
                      style={styles.imgForward}
                    />
                  </View>
                </TouchableOpacity>
              ))}

            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
