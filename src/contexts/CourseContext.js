import React, {createContext, useState} from 'react'


const StudyCourseContext = createContext();

export function CourseProvider({children}){
  return (
    <StudyCourseContext.Provider value={body}>
        {children}
    </StudyCourseContext.Provider>
  )
}

const body = [
  {
    id: 7,
    study_course_id: 9,
    title: "Repudiandae ad repud",
    preview: "Sit magnam ipsum r Sit magnam ipsum rSit magnam ipsum rSit magnam ipsum rSit magnam ipsum rSit magnam ipsum rSit magnam ipsum rvSit magnam ipsum rSit magnam ipsum rSit magnam ipsum rSit magnam ipsum rSit magnam ipsum r",
    body: "Amet culpa dignissi Amet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissiAmet culpa dignissi",
    created_at: "2023-01-28T05:59:27.000000Z",
    updated_at: "2023-01-28T05:59:27.000000Z",
    deleted_at: null,
    slug: "repudiandae-ad-repud",
    file_url: null
  },
  {
    id: 8,
    study_course_id: 9,
    title: "Computer Engineering",
    preview: "erydsjwei erhdfiuerkdf kujrhiu jere feuirjkhfuewjfdb reujdhfiuewjk js  erydsjwei erhdfiuerkdf kujrhiu jere feuirjkhfuewjfdb reujdhfiuewjk js  erydsjwei erhdfiuerkdf kujrhiu jere feuirjkhfuewjfdb reujdhfiuewjk js  erydsjwei erhdfiuerkdf kujrhiu jere feuirjkhfuewjfdb reujdhfiuewjk js  erydsjwei erhdfiuerkdf kujrhiu jere feuirjkhfuewjfdb reujdhfiuewjk js v",
    body: "8e9ufdhsfjk esadf;ewukjfhf uijdhfiu4jkweqfando ifEAIUKFSJHVIOW DKASFHs iurekjfdsafh vdiujkafhbkejdfb 8e9ufdhsfjk esadf;ewukjfhf uijdhfiu4jkweqfando ifEAIUKFSJHVIOW DKASFHs iurekjfdsafh vdiujkafhbkejdfb 8e9ufdhsfjk esadf;ewukjfhf uijdhfiu4jkweqfando ifEAIUKFSJHVIOW DKASFHs iurekjfdsafh vdiujkafhbkejdfb 8e9ufdhsfjk esadf;ewukjfhf uijdhfiu4jkweqfando ifEAIUKFSJHVIOW DKASFHs iurekjfdsafh vdiujkafhbkejdfb 8e9ufdhsfjk esadf;ewukjfhf uijdhfiu4jkweqfando ifEAIUKFSJHVIOW DKASFHs iurekjfdsafh vdiujkafhbkejdfb",
    created_at: "2023-01-28T05:59:57.000000Z",
    updated_at: "2023-01-28T05:59:57.000000Z",
    deleted_at: null,
    slug: "computer-engineering",
    file_url: null
  }    
]

export default StudyCourseContext