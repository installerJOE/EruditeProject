const ScheduleTypes = [
  {
    "id": 2,
    "name": "Class Timetable",
    "description": "This is a brief description of how this schedule type would turn out",
    "created_at": "2023-02-07T08:17:04.000000Z",
    "updated_at": "2023-02-07T09:03:46.000000Z",
    "is_timetable_based": 1
  },
  {
    "id": 3,
    "name": "Personal Study Timetable",
    "description": "A brief description of personal study timetable",
    "created_at": "2023-02-07T08:17:54.000000Z",
    "updated_at": "2023-02-07T09:04:16.000000Z",
    "is_timetable_based": 1
  },
  {
    "id": 6,
    "name": "Academic Calendar",
    "description": "A brief descriotion of this schedule type.",
    "created_at": "2023-02-07T08:41:24.000000Z",
    "updated_at": "2023-02-07T09:04:21.000000Z",
    "is_timetable_based": 0
  }
]


const Timetable = [
  {
    "id": 1,
    "value": "Monday",
    "timetable": [
      {
        "id": 4,
        "timetable_type_id": 2,
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

export {ScheduleTypes, Timetable};