import React, {createContext, useState} from 'react'


const ScheduleListContext = createContext();

export function ScheduleListProvider({children}){
  return (
    <ScheduleListContext.Provider value={body.data}>
        {children}
    </ScheduleListContext.Provider>
  )
}

const body = {
    "message": "Retrieved successfully",
    "data": [
        {
            "id": 1,
            "name": "Engineering",
            "slug": "engineering",
            "description": "A short description of what comes here.",
            "is_active": 0,
            "created_at": "2023-01-27T00:23:03.000000Z",
            "updated_at": "2023-01-27T06:20:34.000000Z",
            "deleted_at": null,
            "is_general_study": 0,
            "study_programmes": [
                {
                "id": 1,
                "name": "Masters Degree",
                "slug": "masters-degree",
                "overview": "This is a short overview of this degree",
                "is_active": 1,
                "created_at": "2023-01-27T06:47:57.000000Z",
                "updated_at": "2023-01-27T06:54:07.000000Z",
                "deleted_at": null,
                "courses": [
                    {
                    "id": 3,
                    "is_active": 0,
                    "updated_at": "2023-01-27T11:05:29.000000Z",
                    "deleted_at": null,
                    "department": {
                        "id": 2,
                        "faculty_id": 1,
                        "name": "Computer Engineering",
                        "slug": "computer-engineering",
                        "overview": "ghjk8udhfbdgvdumhfhvtyghfdjyghjfdjghejdsf",
                        "is_active": 1,
                        "created_at": "2023-01-27T00:41:30.000000Z",
                        "updated_at": "2023-01-27T06:01:23.000000Z",
                        "deleted_at": null
                    }
                    }
                ]
                },
                {
                "id": 2,
                "name": "Bachelors Degree",
                "slug": "bachelors-degree",
                "overview": "A short overview of everything that has to do with bachelors degree be it B.Sc, B.Ed, B.A, B.Eng, MBBS, or what have you, all of them enter this category of programme.",
                "is_active": 1,
                "created_at": "2023-01-27T06:54:39.000000Z",
                "updated_at": "2023-01-27T06:55:33.000000Z",
                "deleted_at": null,
                "courses": [
                    {
                    "id": 1,
                    "is_active": 1,
                    "updated_at": "2023-01-27T13:46:12.000000Z",
                    "deleted_at": null,
                    "department": {
                        "id": 2,
                        "faculty_id": 1,
                        "name": "Computer Engineering",
                        "slug": "computer-engineering",
                        "overview": "ghjk8udhfbdgvdumhfhvtyghfdjyghjfdjghejdsf",
                        "is_active": 1,
                        "created_at": "2023-01-27T00:41:30.000000Z",
                        "updated_at": "2023-01-27T06:01:23.000000Z",
                        "deleted_at": null
                    }
                    },
                    {
                    "id": 4,
                    "is_active": 0,
                    "updated_at": "2023-01-27T11:16:08.000000Z",
                    "deleted_at": null,
                    "department": {
                        "id": 5,
                        "faculty_id": 1,
                        "name": "Chemical Engineering",
                        "slug": "chemical-engineering",
                        "overview": "This is the short overview of tuiluj uyfeduhds",
                        "is_active": 1,
                        "created_at": "2023-01-27T11:00:26.000000Z",
                        "updated_at": "2023-01-27T11:00:26.000000Z",
                        "deleted_at": null
                    }
                    },
                    {
                    "id": 5,
                    "is_active": 0,
                    "updated_at": "2023-01-27T11:16:35.000000Z",
                    "deleted_at": null,
                    "department": {
                        "id": 4,
                        "faculty_id": 1,
                        "name": "Electrical/Electronics Engineering",
                        "slug": "electricalelectronics-engineering",
                        "overview": "Shorty overview of this departmetnt",
                        "is_active": 1,
                        "created_at": "2023-01-27T11:00:06.000000Z",
                        "updated_at": "2023-01-27T11:00:06.000000Z",
                        "deleted_at": null
                    }
                    }
                ]
                }
            ]
        },
        {
        "id": 2,
        "name": "School of Medicine",
        "slug": "school-of-medicine",
        "description": "This is a short description",
        "is_active": 0,
        "created_at": "2023-01-27T00:26:13.000000Z",
        "updated_at": "2023-01-27T00:37:49.000000Z",
        "deleted_at": null,
        "is_general_study": 0,
        "study_programmes": [
            {
            "id": 1,
            "name": "Masters Degree",
            "slug": "masters-degree",
            "overview": "This is a short overview of this degree",
            "is_active": 1,
            "created_at": "2023-01-27T06:47:57.000000Z",
            "updated_at": "2023-01-27T06:54:07.000000Z",
            "deleted_at": null,
            "courses": [
                {
                "id": 7,
                "is_active": 0,
                "updated_at": "2023-01-27T14:03:12.000000Z",
                "deleted_at": null,
                "department": {
                    "id": 3,
                    "faculty_id": 2,
                    "name": "Pharmacy",
                    "slug": "pharmacy",
                    "overview": "trgfjkyuhj fyujuifj ruijkdfhjrdfgo2uil8ewufh urikjflhiuewjk fueiwfjhwueakrjfh iurjkfhewrj",
                    "is_active": 1,
                    "created_at": "2023-01-27T00:42:06.000000Z",
                    "updated_at": "2023-01-27T00:42:29.000000Z",
                    "deleted_at": null
                }
                }
            ]
            },
            {
            "id": 2,
            "name": "Bachelors Degree",
            "slug": "bachelors-degree",
            "overview": "A short overview of everything that has to do with bachelors degree be it B.Sc, B.Ed, B.A, B.Eng, MBBS, or what have you, all of them enter this category of programme.",
            "is_active": 1,
            "created_at": "2023-01-27T06:54:39.000000Z",
            "updated_at": "2023-01-27T06:55:33.000000Z",
            "deleted_at": null,
            "courses": [
                {
                "id": 6,
                "is_active": 0,
                "updated_at": "2023-01-27T14:02:49.000000Z",
                "deleted_at": null,
                "department": {
                    "id": 3,
                    "faculty_id": 2,
                    "name": "Pharmacy",
                    "slug": "pharmacy",
                    "overview": "trgfjkyuhj fyujuifj ruijkdfhjrdfgo2uil8ewufh urikjflhiuewjk fueiwfjhwueakrjfh iurjkfhewrj",
                    "is_active": 1,
                    "created_at": "2023-01-27T00:42:06.000000Z",
                    "updated_at": "2023-01-27T00:42:29.000000Z",
                    "deleted_at": null
                }
                }
            ]
            }
        ]
        },
        {
        "id": 3,
        "name": "Life Sciences",
        "slug": "life-sciences",
        "description": "This is a short description of life sciences.",
        "is_active": 1,
        "created_at": "2023-01-27T00:28:35.000000Z",
        "updated_at": "2023-01-27T06:29:06.000000Z",
        "deleted_at": null,
        "is_general_study": 0,
        "study_programmes": [
            {
            "id": 1,
            "name": "Masters Degree",
            "slug": "masters-degree",
            "overview": "This is a short overview of this degree",
            "is_active": 1,
            "created_at": "2023-01-27T06:47:57.000000Z",
            "updated_at": "2023-01-27T06:54:07.000000Z",
            "deleted_at": null,
            "courses": []
            },
            {
            "id": 2,
            "name": "Bachelors Degree",
            "slug": "bachelors-degree",
            "overview": "A short overview of everything that has to do with bachelors degree be it B.Sc, B.Ed, B.A, B.Eng, MBBS, or what have you, all of them enter this category of programme.",
            "is_active": 1,
            "created_at": "2023-01-27T06:54:39.000000Z",
            "updated_at": "2023-01-27T06:55:33.000000Z",
            "deleted_at": null,
            "courses": []
            }
        ]
        },
        {
        "id": 4,
        "name": "General Study",
        "slug": "general-study",
        "description": "All lessons that are available for everyone is found under this faculty",
        "is_active": 1,
        "created_at": "2023-01-27T01:10:53.000000Z",
        "updated_at": "2023-01-28T05:55:51.000000Z",
        "deleted_at": null,
        "is_general_study": 1,
        "study_programmes": [
            {
            "id": 1,
            "name": "Masters Degree",
            "slug": "masters-degree",
            "overview": "This is a short overview of this degree",
            "is_active": 1,
            "created_at": "2023-01-27T06:47:57.000000Z",
            "updated_at": "2023-01-27T06:54:07.000000Z",
            "deleted_at": null,
            "courses": [
                {
                "id": 8,
                "is_active": 0,
                "updated_at": "2023-01-28T05:57:49.000000Z",
                "deleted_at": null,
                "department": {
                    "id": 6,
                    "faculty_id": 4,
                    "name": "General Study",
                    "slug": "general-study",
                    "overview": "All courses accessible to everyone belongs to this department.",
                    "is_active": 1,
                    "created_at": "2023-01-28T05:57:17.000000Z",
                    "updated_at": "2023-01-28T05:57:17.000000Z",
                    "deleted_at": null
                }
                }
            ]
            },
            {
            "id": 2,
            "name": "Bachelors Degree",
            "slug": "bachelors-degree",
            "overview": "A short overview of everything that has to do with bachelors degree be it B.Sc, B.Ed, B.A, B.Eng, MBBS, or what have you, all of them enter this category of programme.",
            "is_active": 1,
            "created_at": "2023-01-27T06:54:39.000000Z",
            "updated_at": "2023-01-27T06:55:33.000000Z",
            "deleted_at": null,
            "courses": [
                {
                "id": 9,
                "is_active": 0,
                "updated_at": "2023-01-28T05:57:59.000000Z",
                "deleted_at": null,
                "department": {
                    "id": 6,
                    "faculty_id": 4,
                    "name": "General Study",
                    "slug": "general-study",
                    "overview": "All courses accessible to everyone belongs to this department.",
                    "is_active": 1,
                    "created_at": "2023-01-28T05:57:17.000000Z",
                    "updated_at": "2023-01-28T05:57:17.000000Z",
                    "deleted_at": null
                }
                }
            ]
            }
        ]
        }
    ]

}     


export default ScheduleListContext