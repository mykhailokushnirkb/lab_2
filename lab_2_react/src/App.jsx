import { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const hour = new Date().getHours()
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark')
  }, [])

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    )
  }

  return (
    <div
      className={`resume-page min-h-screen bg-slate-100 px-4 py-8 text-slate-800 ${
        theme === 'dark' ? 'dark' : ''
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={toggleTheme}
          aria-pressed={theme === 'dark'}
          className="mb-5 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-md hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          {theme === 'dark'
            ? 'Увімкнути світлу тему'
            : 'Увімкнути темну тему'}
        </button>

        <Header />

        <main>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Reviews />
        </main>

        <Footer />
        <ContactForm />
      </div>
    </div>
  )
}