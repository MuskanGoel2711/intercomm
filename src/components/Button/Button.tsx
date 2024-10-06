import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  isButtonDisabled: boolean;
  style?: ViewStyle | ViewStyle[];
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, isButtonDisabled, style, text }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isButtonDisabled}
      activeOpacity={isButtonDisabled ? 1 : 0.7}
      style={[styles.buttonBox, style]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;
