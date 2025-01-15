import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useTheme } from '../../context/ThemeContext'

function ContactIcons() {
  const { isDark } = useTheme()

  return (
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/andrew-boylan-92842810a/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-2xl ${isDark ? 'text-gray-200 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors `}
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:andreweboylan@gmail.com"
        className={`text-2xl ${isDark ? 'text-gray-200 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors `}
      >
        <MdEmail />
      </a>
    </div>
  )
}

export default ContactIcons
