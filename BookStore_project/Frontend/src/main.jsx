import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Courses from './components/Courses.jsx'
import Homeitems from './Home/Homeitems.jsx'
import SignUp from './components/SignUp.jsx'
import ContactUs from './components/ContactUs.jsx'
import AuthProvider, { useAuth } from './context/Authorization-context.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'



// const router = createBrowserRouter([{
//   path: '/',
//   element: <App />,
//   children: [
//     { path: '/', element: <Homeitems /> },
//     { path: '/course', element: <Courses /> },
//     { path: '/contact', element: <ContactUs /> },
//   ]
// },
// { path: '/signup', element: <SignUp /> },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <React.StrictMode>  */}
    <AuthProvider>
      <div>
        <App />
      </div>
      {/* <div>
      <RouterProvider router={router}></RouterProvider>
      </div> */}
    </AuthProvider>
   {/* </React.StrictMode>  */}
  </BrowserRouter>
)
