export interface Education {
    school: string
    degree: string
    location: string
    dateText: string
    description?: string[]
    gpa?: string
    selectedCoursework?: string[]
    images: string[]
    starred?: boolean
  }
  
  export interface EducationData {
    education: Education[]
  }
  