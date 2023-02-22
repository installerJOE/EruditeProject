import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native"

export const fetchAcademics = () => {
  AsyncStorage.getItem('academics').then(data => {
    if(data !== null){
      return JSON.parse(data)
    }
    return null
  })
  .catch(error => {
    return error
  })
}

export const fetchSchedules = () => {
  AsyncStorage.getItem('schedules').then(data => {
    if(data !== null){
      return JSON.parse(data)
    }
    return null;
  })
  .catch(error => {
    return error
  })
}

export const storeSchedules = (schedules) => {
  AsyncStorage.setItem('schedules', JSON.stringify(schedules))
}