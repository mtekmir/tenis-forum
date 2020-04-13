import jwt from 'jsonwebtoken'

type generateToken = (id: string) => string

const generateToken: generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: '2d' })
}

export default generateToken
