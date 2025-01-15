import ResumeAboutToggle from './ResumeAboutToggle'
import ContactIcons from './ContactIcons'
import { useTheme } from '../../context/ThemeContext'

function Header() {
  const { isDark } = useTheme()

  return (
    <nav className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b-4 p-4 ps-6 pe-6 transition-colors duration-1000`}>

      <div className="mx-auto flex flex-col xs:flex-row justify-between items-center gap-5 p-4 xs:p-2">
        <ContactIcons />
        <ResumeAboutToggle />
      </div>
    </nav>
  )
}

export default Header

