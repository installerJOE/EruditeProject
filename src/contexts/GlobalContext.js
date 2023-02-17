import React, { useState, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AcademicsData } from './AcademicsContext';
import { ScheduleTypes, Timetable } from './ScheduleContext';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
  
  const [academics, setAcademics] = useState(null)
  const [schedules, setSchedules] = useState(null)
  const [timetable, setTimetables] = useState(null)
  
  AsyncStorage.getItem('academics').then(data => {
    if(data !== null){
      setAcademics(JSON.parse(data))
    }
    else{
      setAcademics(AcademicsData)
    }
  })
  .catch(error => {
    console.log(error)
  })

  AsyncStorage.getItem('schedules').then(data => {
    if(data !== null){
        const schedule = JSON.parse(data)
        setSchedules(schedule.types)
        setTimetables(schedule.timetable)
    }
    else{
        setSchedules(ScheduleTypes)
        setTimetables(Timetable)
    }
  })
  .catch(error => {
    console.log(error)
  })

  return (
    <GlobalContext.Provider value={[academics, setAcademics]}>

{/* schedule: schedules,
        timetable: [timetable, setTimetables] */}
      {children}
    </GlobalContext.Provider>
  )
}