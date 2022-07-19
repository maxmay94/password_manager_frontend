import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className="bg-red-300">
      <h1>Sign Up</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup
