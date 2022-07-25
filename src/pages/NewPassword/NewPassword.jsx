import { useState } from 'react'
import NewPasswordForm from '../../components/NewPasswordForm/NewPasswordForm'

const NewPassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className="text-center bg-slate-600">
      <h1 className='m-4 text-3xl font-thin'>New Password</h1>
      <p>{message}</p>
      <NewPasswordForm {...props} updateMessage={updateMessage} />
    </div>
  )
}

export default NewPassword
