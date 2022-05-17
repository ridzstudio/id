import excuteQuery from '../../../lib/db'
import * as encryption from 'object-encrypt-decrypt'
import validEmail from '@secretsofsume/valid-email'

const create = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = encryption.decrypt(req.body.data)
      let errorStatus = false
      let error = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }

      if (!data.firstName) {
        errorStatus = true
        error = { ...error, firstName: 'First name is required' }
      }

      if (!data.lastName) {
        errorStatus = true
        error = { ...error, lastName: 'Last name is required' }
      }

      if (!data.email) {
        errorStatus = true
        error = { ...error, email: 'Email address is required' }
      } else if (!validEmail(data.email)) {
        errorStatus = true
        error = { ...error, email: 'Email address is invalid' }
      }

      if (!data.password) {
        errorStatus = true
        error = { ...error, password: 'Password is required' }
      } else if (data.password.length < 6) {
        errorStatus = true
        error = { ...error, password: 'Password minimum length should be 6 character' }
      }

      if (!data.confirmPassword) {
        errorStatus = true
        error = { ...error, confirmPassword: 'Password confirmation is required' }
      } else if (data.confirmPassword !== data.password) {
        console.log(data.confirmPassword)
        console.log(data.password)
        errorStatus = true
        error = { ...error, confirmPassword: 'Password is not matching' }
      }

      if (errorStatus) {
        res.setHeader("message", encryption.encrypt(error))
        res.status(417).end()
      } else {
        const result = await excuteQuery({
          query: 'INSERT INTO accounts (firstname, lastname, email, password, status) VALUES ((?), (?), (?), (?), 1)',
          values: [data.firstName, data.lastName, data.email, data.password],
        })

        console.log(result)

        if (result.insertId) {
          res.status(201).end()
        } else {
          res.status(500).end()
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