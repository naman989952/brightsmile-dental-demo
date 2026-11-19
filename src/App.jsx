import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Services, About, Reviews } from './components/Sections'
import Contact from './components/Contact'
import { Container } from './components/ui'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>
      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        <Container>© BrightSmile Dental — demo website built with React & Tailwind CSS.</Container>
      </footer>
    </>
  )
}
