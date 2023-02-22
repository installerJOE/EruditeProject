import axios from 'axios'
import { API } from './main'

export const __storeCourse = (token, timetableType, payload) => {
  axios.post(`${API.BASE_URL}/${timetableType}/timetable/add-course`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: payload  
  })
  .then(response => {
    return {
        success: true,
        data: response.data
    }
  })
  .catch(error => {
    return {
        success: false,
        error: error
    }
  })
}