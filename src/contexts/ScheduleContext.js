import React, { createContext, useReducer } from 'react'


export const ACTIONS = {
  TOGGLE_DAY: 'change-current-day',
  TOGGLE_SCHEDULE_TYPE: 'change-current-scheduleType'
}

const reducer = (state, action) => {
  switch(action.type){
    case ACTIONS.TOGGLE_DAY:
      return {
        ...state,
        currentDay: action.payload.dayId,
      };

    case ACTIONS.TOGGLE_SCHEDULE_TYPE:
      return{
        ...state,
        currentScheduleType: action.payload.scheduleTypeId
      }
    default: 
      return state
  }
}

export const ScheduleContext = createContext();

export const ScheduleContextProvider = ({children}) => {
  const initialState = {
    currentDay: null,
    currentScheduleType: null,
  }

  const [scheduleState, updateScheduleState] = useReducer(reducer, initialState)

  return (
    <ScheduleContext.Provider value={[scheduleState, updateScheduleState]}>
      {children}
    </ScheduleContext.Provider>
  )
}


export const ScheduleTypes = [
  {
    "id": 2,
    "name": "Class Timetable",
    "description": "This is a brief description of how this schedule type would turn out",
    "created_at": "2023-02-07T08:17:04.000000Z",
    "updated_at": "2023-02-07T09:03:46.000000Z",
    "is_timetable_based": 1,
    "schedules": [
      {
        "id": 1,
        "value": "Monday",
        "timetable": [
          {
            "id": 4,
            "timetable_type_id": 2,
            "day_id": 1,
            "start_time": "14:30:00",
            "end_time": "16:40:00",
            "course": {
              "id": 4,
              "course_code": "MEE221"
            }
          },
          {
            "id": 5,
            "timetable_type_id": 2,
            "day_id": 1,
            "start_time": "17:00:00",
            "end_time": "18:50:00",
            "course": {
              "id": 2,
              "course_code": "MEE322"
            }
          }
        ]
      },
      {
        "id": 2,
        "value": "Tuesday",
        "timetable": [
          {
            "id": 1,
            "timetable_type_id": 2,
            "day_id": 2,
            "start_time": "01:10:00",
            "end_time": "02:40:00",
            "course": {
              "id": 1,
              "course_code": "MEE312"
            }
          },
          {
            "id": 2,
            "timetable_type_id": 2,
            "day_id": 2,
            "start_time": "02:30:00",
            "end_time": "03:40:00",
            "course": {
              "id": 2,
              "course_code": "MEE322"
            }
          },
          {
            "id": 3,
            "timetable_type_id": 2,
            "day_id": 2,
            "start_time": "02:30:00",
            "end_time": "03:40:00",
            "course": {
              "id": 3,
              "course_code": "MEE211"
            }
          }
        ]
      },
      {
        "id": 3,
        "value": "Wednesday",
        "timetable": []
      },
      {
        "id": 4,
        "value": "Thursday",
        "timetable": [
          {
            "id": 6,
            "timetable_type_id": 2,
            "day_id": 4,
            "start_time": "17:00:00",
            "end_time": "18:50:00",
            "course": {
              "id": 5,
              "course_code": "CVE211"
            }
          }
        ]
      },
      {
        "id": 5,
        "value": "Friday",
        "timetable": [
          {
            "id": 7,
            "timetable_type_id": 2,
            "day_id": 5,
            "start_time": "20:00:00",
            "end_time": "22:50:00",
            "course": {
              "id": 5,
              "course_code": "CVE211"
            }
          }
        ]
      },
      {
        "id": 6,
        "value": "Saturday",
        "timetable": []
      },
      {
        "id": 7,
        "value": "Sunday",
        "timetable": []
      }
    ]
  },
  {
    "id": 3,
    "name": "Personal Study Timetable",
    "description": "A brief description of personal study timetable",
    "created_at": "2023-02-07T08:17:54.000000Z",
    "updated_at": "2023-02-07T09:04:16.000000Z",
    "is_timetable_based": 1,
    "schedules": [
      {
        "id": 1,
        "value": "Monday",
        "timetable": []
      },
      {
        "id": 2,
        "value": "Tuesday",
        "timetable": []
      },
      {
        "id": 3,
        "value": "Wednesday",
        "timetable": []
      },
      {
        "id": 4,
        "value": "Thursday",
        "timetable": []
      },
      {
        "id": 5,
        "value": "Friday",
        "timetable": []
      },
      {
        "id": 6,
        "value": "Saturday",
        "timetable": []
      },
      {
        "id": 7,
        "value": "Sunday",
        "timetable": []
      }
    ]
  },
  {
    "id": 6,
    "name": "Academic Calendar",
    "description": "A brief descriotion of this schedule type.",
    "created_at": "2023-02-07T08:41:24.000000Z",
    "updated_at": "2023-02-07T09:04:21.000000Z",
    "is_timetable_based": 0,
    "schedules": []
  }
]

export const responseOnAddingCourse = {
  "message": "Your timetable has been updated successfully.",
  
  "data": {
    "id": 2,
    "name": "Class Timetable",
    "description": "This is a brief description of how this schedule type would turn out",
    "created_at": "2023-02-07T08:17:04.000000Z",
    "updated_at": "2023-02-07T09:03:46.000000Z",
    "is_timetable_based": 1,
    "schedules": [
      {
        "id": 1,
        "value": "Monday",
        "timetable": [
          {
            "id": 4,
            "timetable_type_id": 2,
            "day_id": 1,
            "start_time": "14:30:00",
            "end_time": "16:40:00",
            "course": {
              "id": 4,
              "course_code": "MEE221"
            }
          },
          {
            "id": 5,
            "timetable_type_id": 2,
            "day_id": 1,
            "start_time": "17:00:00",
            "end_time": "18:50:00",
            "course": {
              "id": 2,
              "course_code": "MEE322"
            }
          }
        ]
      },
      {
        "id": 2,
        "value": "Tuesday",
        "timetable": [
          {
            "id": 1,
            "timetable_type_id": 2,
            "day_id": 2,
            "start_time": "01:10:00",
            "end_time": "02:40:00",
            "course": {
              "id": 1,
              "course_code": "MEE312"
            }
          },
          {
            "id": 2,
            "timetable_type_id": 2,
            "day_id": 2,
            "start_time": "02:30:00",
            "end_time": "03:40:00",
            "course": {
              "id": 2,
              "course_code": "MEE322"
            }
          },
          {
            "id": 3,
            "timetable_type_id": 2,
            "day_id": 2,
            "start_time": "02:30:00",
            "end_time": "03:40:00",
            "course": {
              "id": 3,
              "course_code": "MEE211"
            }
          }
        ]
      },
      {
        "id": 3,
        "value": "Wednesday",
        "timetable": []
      },
      {
        "id": 4,
        "value": "Thursday",
        "timetable": [
          {
            "id": 6,
            "timetable_type_id": 2,
            "day_id": 4,
            "start_time": "17:00:00",
            "end_time": "18:50:00",
            "course": {
              "id": 5,
              "course_code": "CVE211"
            }
          }
        ]
      },
      {
        "id": 5,
        "value": "Friday",
        "timetable": [
          {
            "id": 7,
            "timetable_type_id": 2,
            "day_id": 5,
            "start_time": "20:00:00",
            "end_time": "22:50:00",
            "course": {
              "id": 5,
              "course_code": "CVE211"
            }
          }
        ]
      },
      {
        "id": 6,
        "value": "Saturday",
        "timetable": []
      },
      {
        "id": 7,
        "value": "Sunday",
        "timetable": []
      }
    ]
  }
}