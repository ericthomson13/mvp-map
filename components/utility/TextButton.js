/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, TouchableOpacity, Text,
} from 'react-native';

const TextButton = ({ press, name, style }) => (
  <View style={style.container}>
    <TouchableOpacity onPress={() => press()} style={style.button}>
      <Text style={style.text}>
        {name}
      </Text>
    </TouchableOpacity>
  </View>
);

export default TextButton;
