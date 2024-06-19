import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Courses from './components/Courses.jsx'
import Homeitems from './Home/Homeitems.jsx'
import SignUp from './components/SignUp.jsx'
import ContactUs from './components/ContactUs.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    { path: '/', element: <Homeitems /> },
    { path: '/course', element: <Courses /> },
    {path: '/contact', element: <ContactUs />}
  ]
},
{ path: '/signup', element: <SignUp /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
