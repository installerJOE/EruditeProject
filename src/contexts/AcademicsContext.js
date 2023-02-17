import React, {createContext, useState} from 'react'


export const AcademicsContext = createContext();

export function AcademicsContextProvider({children}){
  const [studentData, setStudentData] = useState(null)

  return (
    <AcademicsContext.Provider value={[studentData, setStudentData]}>
      {children}
    </AcademicsContext.Provider>
  )
}

export const AcademicsData = {
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