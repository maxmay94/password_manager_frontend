import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as passService from './services/passService'
import NewPassword from './pages/NewPassword/NewPassword'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [passwords, setPasswords] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPasswords = async() => {
      setPasswords(await passService.getAllPasswords())
    }
    fetchPasswords()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  console.log('@App.jsx --> ',passwords)

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <div className='bg-slate-500 h-screen'>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} passwords={passwords}/>} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/newPassword"
          element={
            user? (
              <NewPassword />
            ) : (
              <Navigate to="/login"/>
            )
          }
        />
      </Routes>
    </div>
  )
}

export default App
