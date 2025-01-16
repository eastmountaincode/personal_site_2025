import { useState } from 'react'
import Projects from './Projects'
import Education from './Education'
import Work from './Work'

function Experience() {
  const [activeTab, setActiveTab] = useState('projects')

  const getTabClasses = (tabName: string) => {
    const baseClasses = "inline-block p-4 border-b-2 rounded-t-lg"
    return `${baseClasses} ${
      activeTab === tabName 
        ? "text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500"
        : "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
    }`
  }

  return (
    <div className='text-gray-200'>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          <li className="me-2">
            <button
              onClick={() => setActiveTab('projects')}
              className={getTabClasses('projects')}
            >
              Projects
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveTab('education')}
              className={getTabClasses('education')}
            >
              Education
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveTab('work')}
              className={getTabClasses('work')}
            >
              Work
            </button>
          </li>
        </ul>
      </div>

      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'education' && <Education />}
        {activeTab === 'work' && <Work />}
      </div>
    </div>
  )
}

export default Experience
