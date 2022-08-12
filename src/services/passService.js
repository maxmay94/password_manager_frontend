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

const addPassword = async(password) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(password)
    })
    return await res.json()
  } catch(err) {
    throw err
  }
}

const createPassword = async(password) => {
  try {
    console.log('@!#%@#$^@#$%@#$% ',password)
  } catch(err) {
    throw err
  }
}

export { 
  getAllPasswords, 
  addPassword,
  createPassword
}