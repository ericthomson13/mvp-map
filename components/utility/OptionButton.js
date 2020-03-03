import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSelectedActivity } from '../../store/actions/activityActions';
import { setScreen, } from '../../store/actions/screenActions';

const OptionButton = ({ name,}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.buttonView} >
      <TouchableOpacity 
        onPress={() => {dispatch(setSelectedActivity(name)); dispatch(setScreen('activityView'));}} 
        style={styles.button} >
        <Text style={styles.text} >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({ 
  buttonView: {
    alignContent: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 10,
  },
  button: {
    backgroundColor: '#126659',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    borderColor: '#BFD1E5',
    color: '#FFF275',
    fontSize: 18,
    padding: 5,
    margin: 5,
  }
});

export default OptionButton;
