import bcrypt from 'bcryptjs'
import { MutationResolvers } from '../../../../types/schema'
import { User } from '../../../../db/models/User'
import { invalidLogin, confirmEmailErr } from '../../errorMessages'
import generateToken from './generateToken'
import { respond } from '../../../common/genericResponse'

export const login: MutationResolvers['login'] = async (
  _,
  { input: { email, password } },
  { response }
) => {
  const user = await User.findOne({ where: { email: email.toLowerCase() } })
  if (!user) {
    return respond('login', invalidLogin)
  }

  if (!user.confirmed) {
    return respond('login', confirmEmailErr)
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    return respond('login', invalidLogin)
  }

  const token = generateToken(user.id)
  response.cookie('token', token, { maxAge: 2592000000, httpOnly: true })
  return respond()
}
