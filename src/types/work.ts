export interface Work {
    title: string
    company: string
    location: string
    dateText: string
    tags: string[]
    description: string[]
    images: string[]
  }
  
  export interface WorkData {
    work: Work[]
  }
  