import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='bg-slate-800 font-semibold text-white'>
          <ul className='flex p-3'>
            <li className='flex-1 ml-3'>Welcome, {user.name}</li>
            <li className='flex-1 ml-16'><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li className='mr-3'><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
