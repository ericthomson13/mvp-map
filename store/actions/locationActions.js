import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export const SET_LOCATION = 'SET_LOCATION';


export const setLocation = (location) => {
  return {
    type: SET_LOCATION,
    payload: { ...location },
  }
};