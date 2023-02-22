import axios from "axios";
import { GlobalContext } from "./GlobalContext";


export const BASE_URL = 'https://erudite.igbolibrary.co/api'

export const __fetchCourses = () => {

  const [{token}, dispatch] = useContext(GlobalContext)

  axios.get(`${BASE_URL}/registered-courses`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }  
  })
  .then(response => {
    return {
      success: true,
      data: response.data.data
    }
  })
  .catch(error => {
    return {
      success: false,
      data: error
    }
  })
}

const RegisteredCoursesContext = [
    {
        "id": 1,
        "title": "Thermodynamics I",
        "slug": "thermodynamics-i",
        "course_code": "MEE312",
        "credit_load": 4,
        "level": 300,
        "created_at": "2023-02-03T14:53:43.000000Z",
        "updated_at": "2023-02-03T14:53:43.000000Z",
        "institution_id": 1,
        "pivot": {
          "student_id": 5,
          "course_id": 1
        }
    },
    {
        "id": 2,
        "title": "Thermodynamics II",
        "slug": "thermodynamics-ii",
        "course_code": "MEE322",
        "credit_load": 3,
        "level": 300,
        "created_at": "2023-02-03T15:14:10.000000Z",
        "updated_at": "2023-02-03T15:14:10.000000Z",
        "institution_id": 1,
        "pivot": {
          "student_id": 5,
          "course_id": 2
        }
    },
    {
        "id": 3,
        "title": "Engineering Mechanics",
        "slug": "engineering-mechanics",
        "course_code": "MEE211",
        "credit_load": 3,
        "level": 200,
        "created_at": "2023-02-03T15:14:36.000000Z",
        "updated_at": "2023-02-03T15:14:36.000000Z",
        "institution_id": 1,
        "pivot": {
          "student_id": 5,
          "course_id": 3
        }
    },
    {
        "id": 4,
        "title": "Engineering Drawing I",
        "slug": "engineering-drawing-i",
        "course_code": "MEE221",
        "credit_load": 3,
        "level": 200,
        "created_at": "2023-02-03T15:15:12.000000Z",
        "updated_at": "2023-02-03T15:15:12.000000Z",
        "institution_id": 1,
        "pivot": {
          "student_id": 5,
          "course_id": 4
        }
    },
    {
        "id": 5,
        "title": "Introduction to Civil Engineering",
        "slug": "introduction-to-civil-engineering",
        "course_code": "CVE211",
        "credit_load": 3,
        "level": 200,
        "created_at": "2023-02-03T15:15:42.000000Z",
        "updated_at": "2023-02-03T15:15:42.000000Z",
        "institution_id": 1,
        "pivot": {
          "student_id": 5,
          "course_id": 5
        }
    },
    {
        "id": 6,
        "title": "Strengths and Materials",
        "slug": "strengths-and-materials",
        "course_code": "CVE328",
        "credit_load": 4,
        "level": 200,
        "created_at": "2023-02-03T15:16:15.000000Z",
        "updated_at": "2023-02-03T15:16:15.000000Z",
        "institution_id": 1,
        "pivot": {
          "student_id": 5,
          "course_id": 6
        }
    }
]


export default RegisteredCoursesContext;