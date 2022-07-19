import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='bg-slate-800 font-semibold text-slate-300'>
          <ul className='flex p-3'>
            <li className='flex-1 ml-3 hover:text-emerald-600'>Welcome, {user.name}</li>
            <li className='flex-1 ml-16 hover:text-amber-400'><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li className='mr-3 hover:text-amber-400'><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav className='bg-slate-800 font-semibold text-slate-300'>
          <ul className='flex p-3'>
            <li className='flex-1 ml-3 hover:text-emerald-600'><Link to="/login">Log In</Link></li>
            <li className='mr-3 hover:text-amber-400'><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
