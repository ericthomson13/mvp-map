import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import axios from 'axios';

import { openWeather } from '../../keys';
import WeeklyForecast from './WeeklyForecast';
import DailyForecast from './DailyForecast';

// TODO: add subcomponents and view to change allowing for different levels of forecasts to be used
// TODO: add onPress to forecast for 3h view of that day
// TODO: allow user to set their units metric/standard

const WeatherForecast = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState(null);
  const [weatherView, setWeatherView] = useState('weekly');

  const getWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=Imperial&appid=${openWeather}`;
      const result = await axios({
        method: 'get',
        url,
        responseType: 'stream'
      })
      const forecast = JSON.parse(result.request.responseText);
      setWeather(forecast.list);
    } catch {
      console.log('error in getting weather');
    }
  };

  useEffect(() => {
    if (weather !== null) {
      return;
    }
    getWeather();
  });

  let weeklyData = [];
  if (weather !== null) {
    for (let i = 0; i < weather.length; i++) { 
      if (i === 0 || i % 8 === 0) {
        weeklyData.push(weather[i]);
      }
    };
  };

  return (
    <View style={styles.container} >
      <Text>
      Forecast:
      </Text>
      <View>
        <WeeklyForecast data={weeklyData} />
      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
  },

});

export default WeatherForecast;