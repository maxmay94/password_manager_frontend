import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/passwords`

const getAllPasswords = async() => {
  try{
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
      method: 'GET'
    })
    return await res.json()
  } catch (err) {
    throw err
  }
}

export { getAllPasswords }