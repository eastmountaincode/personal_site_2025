import { useState, useEffect } from 'react'
import { differenceInYears, differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'

function TimeElapsed() {
  const [timeElapsed, setTimeElapsed] = useState('')
  
  useEffect(() => {
    const startDate = new Date('2023-01-09T09:00:00')
    
    const updateTime = () => {
      const now = new Date()
      
      const years = differenceInYears(now, startDate)
      const months = differenceInMonths(now, startDate) % 12
      const days = differenceInDays(now, startDate) % 30
      const hours = differenceInHours(now, startDate) % 24
      const minutes = differenceInMinutes(now, startDate) % 60
      const seconds = differenceInSeconds(now, startDate) % 60
      
      setTimeElapsed(`${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])
  
  return <span className="text-gray-400 md:ps-12">{timeElapsed}</span>
}

export default TimeElapsed

