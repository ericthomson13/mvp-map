import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Linking } from 'expo';

const NormalItem = ({ setWeatherDisplay, url, name, difficulty, length, location, summary }) => {
  return (
    <View 
      style={styles.card}
    >
      <TouchableOpacity 
        onPress={() => setWeatherDisplay(true)}
      >
        <View style={styles.header} >
          <TouchableOpacity onPress={()=> Linking.openURL(url)}>
           <Text style={styles.name}> {name} </Text>
         </TouchableOpacity>
       </View>
       <View style={styles.dlContainer} >
          <Text style={styles.difficulty} >{difficulty}</Text>
          <Text style={styles.length} >{length} mi</Text>
        </View>
        <View style={styles.location}>
          <Text style={styles.locationText} >{location}</Text>
        </View>
        <Text>{summary}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#126659',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    justifyContent:'space-evenly',
  },
  name: {
    alignContent: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#BFD1E5',
  },
  difficulty: {
    alignItems: 'center',
    fontSize: 14,
    paddingRight: 10,    
  },
  header: {
    flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // alignContent: '',
    width: '100%',
    borderBottomWidth: 2,
    padding: 5,
    margin: 5,

  },
  dlContainer: {
    padding: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  summary: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: '75%',

  },
  image: {
    width: '20%',
    height: '20%',
  },
  length: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#BFD1E5',
    fontWeight: 'bold',
  },
  location: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,

  },
  locationText: {
    color: '#BFD1E5',
    fontWeight: 'bold',
  },
});

export default NormalItem;