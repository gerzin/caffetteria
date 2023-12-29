import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main.tsx'
import './styles/index.scss'
import BottomNav from './components/BottomNav/BottomNav.tsx'
import { updateThemeColor } from './utils/utilities.ts'


export default function App() {

  useEffect(() => {
    updateThemeColor();
  }, [])

  return (
    <>
      <Main />
      <BottomNav />
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
