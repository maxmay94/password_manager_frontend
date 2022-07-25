import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const NewPasswordForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pw: '',
    newPw: '',
    newPwConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.changePassword(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { pw, newPw, newPwConf } = formData

  const isFormInvalid = () => {
    return !(pw && newPw && newPw === newPwConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className=''
    >
      <div className="m-3">
        <label htmlFor="password" className="p-3">
          Site Name
        </label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div className="m-3">
        <label htmlFor="newPassword" className="p-3">
          Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="newPassword"
          value={newPw}
          name="newPw"
          onChange={handleChange}
        />
      </div>
      <div className="m-3">
        <label htmlFor="newPasswordConf" className="p-3">
          Confirm Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="newPasswordConf"
          value={newPwConf}
          name="newPwConf"
          onChange={handleChange}
        />
      </div>
      <div className="m-1">
        <button disabled={isFormInvalid()} className="m-5 text-green-800 bg-green-100 hover:bg-green-400 rounded-sm p-2">
          Add Password
        </button>
        <Link to="/" className='m-5 text-red-800 bg-red-100 hover:bg-red-400 rounded-sm p-2'>
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default NewPasswordForm
