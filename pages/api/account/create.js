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
        errorStatus = true
        error = { ...error, confirmPassword: 'Password is not matching' }
      }

      if (errorStatus) {
        res.setHeader("message", encryption.encrypt(error))
        res.status(417).end()
      } else {
        const checkExistingEmail = await excuteQuery({
          query: 'SELECT * FROM accounts WHERE email = ?',
          values: [data.email]
        })

        if(checkExistingEmail.length > 0) {
          errorStatus = true
          error = { ...error, email: 'An account already exist with this email' }
          res.setHeader("message", encryption.encrypt(error))
          res.status(417).end()
        } else {
          const createAccount = await excuteQuery({
            query: 'INSERT INTO accounts (firstname, lastname, email, password, status) VALUES ((?), (?), (?), (?), 1)',
            values: [data.firstName, data.lastName, data.email, data.password],
          })
          
          if (createAccount.insertId) {
            res.status(201).end()
          } else {
            res.status(500).end()
          }
        }

      }

    } catch (error) {
      res.status(500).end()
    }
  } else {
    res.status(405).end()
  }
}

export default create