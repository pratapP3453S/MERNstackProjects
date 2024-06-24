import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './components/Theme-context'
import { Toaster } from 'react-hot-toast';
import Homeitems from './Home/Homeitems';
import Courses from './components/Courses';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import { useAuth } from './context/Authorization-context';
import Login from './components/Login';
// import AuthProvider from './context/Authorization-context.jsx';

function App() {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);

  return (
    <ThemeProvider>
      <div>
        {/* <AuthProvider> */}
        {/* <Navbar />
          <Outlet></Outlet>
          <Footer /> */}
        {/* </AuthProvider> */}
        <Routes>
          <Route path='/' element={<Homeitems />} />
          <Route path='/course' element={ authUser? <Courses /> : <Navigate to='/signup' /> } />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={authUser? <ContactUs /> : <Navigate to='/signup' />} />
        </Routes>
      </div>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
