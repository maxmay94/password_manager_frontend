import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'

const NewPassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className="text-center">
      <h1>New Password</h1>
      <p>{message}</p>
      <ChangePasswordForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default NewPassword
