import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from './components/Theme-context'

function App() {

  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Outlet></Outlet>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
