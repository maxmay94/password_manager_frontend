import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import * as authService from '../../services/authService'
import * as passService from '../../services/passService'

const NewPasswordForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    siteName: '',
    pw: '',
    pwConf: '',
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
      await passService.addPassword(formData)
      // props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { siteName, pw, pwConf } = formData

  const isFormInvalid = () => {
    return !(siteName && pw && pw === pwConf)
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
          type="text"
          autoComplete="off"
          id="password"
          value={siteName}
          name="siteName"
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
          value={pw}
          name="pw"
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
          value={pwConf}
          name="pwConf"
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
