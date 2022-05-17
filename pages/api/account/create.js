import excuteQuery from '../../../lib/db'
import * as encryption from 'object-encrypt-decrypt'

const create = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = encryption.decrypt(req.body.data)
      let errorStatus = false
      let error = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }

      if(!data.firstName) {
        errorStatus = true
        error = {...error, firstName:'First name is required'}
      }
      
      if(!data.lastName) {
        errorStatus = true
        error = {...error, lastName:'Last name is required'}
      }
      
      if(!data.email) {
        errorStatus = true
        error = {...error, email:'Email address is required'}
      } else if(validEmail(data.email)) {
        errorStatus = true
        error = {...error, email:'Email address is invalid'}
      }
      
      if(!data.password) {
        errorStatus = true
        error = {...error, password:'Password is required'}
      } else if(data.password.length <6) {
        errorStatus = true
        error = {...error, password:'Password minimum length should be 6 character'}
      }

      if(errorStatus) {
        res.setHeader("message", encryption.encrypt(error))
        res.status(406).end()
      } else {
        const result = await excuteQuery({
          query: 'INSERT INTO accounts (firstname, lastname, email, password, status) VALUES ((?), (?), (?), (?), 1)',
          values: [data.firstname, data.lastname, data.email, data.password],
        })
  
        if(result.insertId) {
          res.status(201).end()
        } else {
          res.status(417).end()
        }
      }

    } catch (error) {
      console.log(error)
      res.status(500).end()
    }
  } else {
    res.status(405).end()
  }
}

export default create