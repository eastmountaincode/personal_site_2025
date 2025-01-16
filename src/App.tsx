import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Resume from './components/Resume/Resume'
import About from './components/About'
import Header from './components/Header/Header'
import { useTheme } from './context/ThemeContext'

function App() {
  const { isDark } = useTheme()

  return (
      <BrowserRouter>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-1000`}>
          <Header />
          <main className="max-w-6xl mx-auto p-8">
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
  )
}

export default App

