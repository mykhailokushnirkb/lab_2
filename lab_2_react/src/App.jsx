import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800">
      <div className="mx-auto max-w-5xl">
        <Header />

        <main>
          <About />
          <Skills />
          <Experience />
          <Education />
        </main>

        <Footer />
      </div>
    </div>
  )
}