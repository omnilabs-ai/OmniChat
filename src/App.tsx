import './App.css'
import AppLayout from './components/Layout'

// Dark theme
import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { themePersistAtom } from './atoms'

function App() {

  // Dark theme
  const [isDarkTheme] = useAtom(themePersistAtom)
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme')
    }
  }, [])


  return (
    <>
      <AppLayout/>
    </>
  )
}

export default App
