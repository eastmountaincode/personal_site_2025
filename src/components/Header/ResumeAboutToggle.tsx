import { useNavigate, useLocation } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../../context/ThemeContext'
import './ResumeAboutToggle.css'

function ResumeAboutToggle() {
  const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const handleToggle = () => {
    toggleTheme()
    navigate(isDark ? '/about' : '/')
  }

  return (
    <div className={`toggle-switch-container ${isDark ? 'dark' : 'light'}`}>
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          checked={location.pathname === '/about'}
          onChange={handleToggle}
        />
        <span className="slider">
          <span className="option-resume">
            Resume <FaMoon className="ml-1" />
          </span>
          <span className="option-about me-1">
            About <FaSun className="ml-1" />
          </span>
        </span>
      </label>
    </div>
  )
}

export default ResumeAboutToggle
