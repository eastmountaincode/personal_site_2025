import { useState, useEffect } from 'react'
import Experience from './Experience/Experience'
import ResumeHeader from './ResumeHeader'
import profileImage from '../../assets/profile_square_2.jpg'

function Resume() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = profileImage
    
    img.onload = () => {
      setIsLoaded(true)
    }
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return (
    <div>
      <ResumeHeader />
      <Experience />
    </div>
  )
}

export default Resume
