import React, { useState, createContext, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AcademicsData } from './AcademicsContext';
import { ScheduleTypes, Timetable } from './ScheduleContext';
import { getSchedules } from '../screens/Main/Academics/methods/__schedules';
import axios from 'axios';

export const GlobalContext = createContext();

export const ACTIONS = {
  STARTUP: 'app-startup',
  SAVE_SCHEDULES: 'save-schedules',
  SAVE_COURSES: 'save-courses',
}

const reducer = (state, action) => {
  switch(action.type){
    case ACTIONS.STARTUP:
      return {
        ...state,
        isAuthenticated: true,
        // user: action.payload.user,
        // token: action.payload.token
      };
    case ACTIONS.SAVE_SCHEDULES:
      return{
        ...state,
        schedules: action.payload.schedules
      }
    default: 
      return state
  }
}

export const GlobalContextProvider = ({children}) => {
  const initialState = {
      isAuthenticated: false,
      user: null,
      academics: null,
      schedules: null,
      courses: null,
      token: '24|tr721flZ58U6YNdcn8O8UAlsgSQXqO7osIigMWtF'
    }
  

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  )
}