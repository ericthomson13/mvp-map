import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, } from 'react-redux';


import OptionButton from '../components/utility/OptionButton';


const WelcomeView = () => {
  const children = useSelector((state) => state.activity.activityOptions);

  return (
    <View style={styles.welcomeView}>
      <Text style={styles.welcomeTitle}>
        Please Select an Activity
      </Text>
      <View>
        <ScrollView style={styles.optionsList} >
          {children.map((option, i) => {
            return (
              <OptionButton key={i} name={option.name} />
            );
          })}
        </ScrollView>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    padding: 10,
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',
    maxHeight: '75%',
  },
  welcomeTitle: {
    padding: 10,
    color: '#9d3a48',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default WelcomeView;
