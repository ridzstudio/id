import cookie from 'cookie'
import excuteQuery from '../../../lib/db'
import * as encryption from 'object-encrypt-decrypt'
import * as randomToken from 'random-token'

const find = async (req, res) => {
  if (req.method === 'HEAD') {
    try {
      const findAccount = await excuteQuery({
        query: 'SELECT id FROM accounts WHERE email = (?)',
        values: [encryption.decrypt(req.headers.data)]
      })
      if(findAccount.length > 0) {
        const key = randomToken(16)
        const createSession = await excuteQuery({
          query: 'INSERT INTO session (`account`, `key`, `user_agent`) VALUES (?, ?, ?)',
          values: [findAccount[0].id, key, req.headers['user-agent']]
        })

        if(createSession.insertId) {
          res.setHeader("Set-Cookie", cookie.serialize("session", encryption.encrypt({key: key, active: false}), {
            httpOnly: true,
            secure: true,
            maxAge: 5 * 60,
            sameSite: 'strict',
            path: '/',
            priority: 'medium'
          })) 
          res.status(202).end()
        }
      } else {
        res.status(404).end()
      }
    } catch (error) {
      res.status(500).end()
    }
  } else {
    res.status(405).end()
  }
}

export default find