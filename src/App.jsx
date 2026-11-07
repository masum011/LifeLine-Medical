import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AppointmentsPage from './pages/AppointmentsPage'
import MedicinesPage from './pages/MedicinesPage'

const PAGES = {
  '#/appointments': AppointmentsPage,
  '#/medicines': MedicinesPage,
}

function currentHash() {
  return PAGES[window.location.hash] ? window.location.hash : '#/'
}

export default function App() {
  const [path, setPath] = useState(currentHash)

  useEffect(() => {
    const onHashChange = () => {
      setPath(currentHash())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const Page = PAGES[path] ?? HomePage

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar currentPath={path} />
      <main className="flex-1">
        <Page />
      </main>
      <Footer />
    </div>
  )
}
