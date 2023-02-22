import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseUrl = 'https://erudite.igbolibrary.co/api'

export const __fetchSchedules = (token) => {
  
  // const token = '20|pjs3EKw0butGEUnY1CToEAuvLydFyD1VqTnNHtYT'
  // const [{schedules}, dispatch] = useContext(GlobalContext)

  axios.get(`${baseUrl}/schedules/details`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }  
  })
  .then(response => {
    const newSchedules = response.data.data;
    storeSchedules(newSchedules);
    return newSchedules;
  })
  .catch(error => {
    return error
  })
}

export const getSchedules = async () => {
  try{
    return await AsyncStorage.getItem('SCHEDULES');
  }
  catch(error){
    return error
  }
}

export const storeSchedules = (schedules) => {
  AsyncStorage.setItem('SCHEDULES', JSON.stringify(schedules))
}