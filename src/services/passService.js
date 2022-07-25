import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/passwords`

const getAllPasswords = async() => {
  try{
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'  },
      method: 'GET'
    })
    const data = await res.json()
    console.log('PASS SERVICE -->',data)
    return data
  } catch (err) {
    throw err
  }
}

export { getAllPasswords }