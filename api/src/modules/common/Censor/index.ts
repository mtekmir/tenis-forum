import { blacklistedWords } from './blacklistedWords'

export const contentIsValid = (text: string) => {
  const words = text
    .split(/<[^>]*>(.*?)<\/[^>]*>/)
    .filter(w => w)
    .reduce((res, w) => [...res, ...w.split(' ')], [])

  return words.every(w => !blacklistedWords.includes(w.toLowerCase()))
}
