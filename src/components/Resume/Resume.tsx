import { useTheme } from '../../context/ThemeContext'
import ResumeHeader from './ResumeHeader'

function Resume() {
  const { isDark } = useTheme()

  return (
    <div>
      <ResumeHeader />
      <div className={`prose lg:prose-xl ${isDark ? 'prose-invert' : ''} transition-colors duration-1000`}>
        <h2>Experience</h2>
        <p>Your resume content will go here</p>
      </div>
    </div>
  )
}

export default Resume

