import Jwt from 'jsonwebtoken'
import { Request } from 'express'
import { redis } from '../../../../services/redis'
import { blacklistedPrefix } from '../../../../constants'
import { AuthenticationError } from 'apollo-server-core'

export const authenticateUser = async (request: Request) => {
  if (!request) {
    return null
  }
  const { token } = request.cookies
  if (!token) {
    return null
  }
  let userId: string
  try {
    const decoded: any = Jwt.verify(token, process.env.JWT_KEY)
    userId = decoded.id
  } catch (err) {
    console.log(err)
    return null
  }
  const blacklisted = await redis.get(`${blacklistedPrefix}${userId}`)
  if (blacklisted) {
    return null
  }

  return userId
}

export const isAuthenticated = (userId: string | null) => {
  if (!userId) {
    throw new AuthenticationError('Unauthorized')
  }
}
