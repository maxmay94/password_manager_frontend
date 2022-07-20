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
      className=""
    >
      <div className="">
        <label htmlFor="password" className="">
          Current Password
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
      <div className="">
        <label htmlFor="newPassword" className="">
          New Password
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
      <div className="">
        <label htmlFor="newPasswordConf" className="">
          Confirm New Password
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
      <div className="">
        <button disabled={isFormInvalid()} className="">
          Add Password
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default NewPasswordForm
