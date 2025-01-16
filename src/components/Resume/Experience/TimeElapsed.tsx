import { useState, useEffect } from 'react'

function TimeElapsed() {
  const [timeElapsed, setTimeElapsed] = useState('')
  
  useEffect(() => {
    const startDate = new Date('2023-01-09T09:00:00')
    
    const updateTime = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setTimeElapsed(`${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])
  
  return <span className="text-gray-400">{timeElapsed}</span>
}

export default TimeElapsed
