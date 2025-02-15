import './App.css'
import AppLayout from './components/Layout'
import { ThemeProvider } from '@mui/material/styles'
import { useAtom } from 'jotai'
import { themeAtom } from './atoms'

function App() {
  const [theme] = useAtom(themeAtom)
  return (
    <ThemeProvider theme={theme}>
      <AppLayout/>
    </ThemeProvider>
  )
}

export default App
