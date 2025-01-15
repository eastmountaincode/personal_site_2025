import { useTheme } from '../context/ThemeContext'

function Resume() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen  transition-colors duration-1000`}>
      <div className={`prose lg:prose-xl ${isDark ? 'prose-invert' : ''} transition-colors duration-1000`}>
        <h2>Resume</h2>
        <p>Your resume content will go here</p>
      </div>
    </div>
  )
}

export default Resume
