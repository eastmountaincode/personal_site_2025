import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Resume from './components/Resume/Resume'
import About from './components/About/About'
import Header from './components/Header/Header'
import { useTheme } from './context/ThemeContext'
import { useEffect } from 'react'

function App() {
  const { isDark } = useTheme()

  useEffect(() => {
    // Update body classes when theme changes
    document.body.className = isDark 
      ? 'bg-gray-900 transition-colors duration-1000' 
      : 'bg-white transition-colors duration-1000'
  }, [isDark])

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-1000`}>
        <Header />
        <main className="max-w-6xl mx-auto p-8">
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/about" element={isDark ? <Navigate to="/" replace /> : <About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

