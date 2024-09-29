import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/layouts/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/layouts/footer/Footer'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  )
}

export default App
