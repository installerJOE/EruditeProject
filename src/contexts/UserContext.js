import React, {createContext, useState} from 'react'


const UserDataContext = createContext();

export function UserDataProvider({children}){
  return (
    <UserDataContext.Provider value={UserContext.data}>
      {children}
    </UserDataContext.Provider>
  )
}

const UserContext = {
    "id": 14,
    "email": "inste2sd0@gmail.com",
    "firstname": "Joe",
    "lastname": "Mike",
    "phone_number": null,
    "gender": null,
    "profile_image": null,
    "is_active": 1,
    "uid": 840807,
    "email_verified_at": null,
    "created_at": "2023-02-03T09:16:38.000000Z",
    "student_data": {
      "id": 5,
      "current_level": 300,
      "profile_overview": null,
      "timetable_is_public": 1,
      "created_at": "2023-02-03T09:16:38.000000Z",
      "university": {
        "id": 1,
        "name": "University of Benin",
        "current_session": "2022/2023",
        "current_semester": "First"
      },
      "department": {
        "id": 1,
        "name": "Animal and Environmental Biology (AEB)"
      },
      "faculty": {
        "id": 3,
        "name": "Life Sciences"
      },
      "study_programme": {
        "id": 1,
        "name": "Masters Degree"
      }
    }
}

export default UserContext