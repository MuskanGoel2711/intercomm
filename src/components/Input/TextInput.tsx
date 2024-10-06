import React from 'react';
import { View, Text, Button, TextInput, TextInputProps, StyleProp, TextStyle } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
  placeholder?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = (props) => {
  return (
    <TextInput
      style={props.style}
      placeholder={props.placeholder}
      {...props} 
    />
  );
};

export default CustomTextInput;
