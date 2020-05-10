import { differenceInSeconds } from 'date-fns'

export const timeLeft = (date: Date) => {
  const secs = differenceInSeconds(Date.now(), new Date(date))

  if (secs < 60) {
    return `${secs} saniye önce`
  } else if (secs >= 60 && secs < 3600) {
    return `${Math.floor(secs / 60)} dakika önce`
  } else if (secs >= 3600 && secs < 86400) {
    return `${Math.floor(secs / 3600)} saat önce`
  } else if (secs >= 86400 && secs < 604800) {
    return `${Math.floor(secs / 86400)} gün önce`
  } else if (secs >= 604800 && secs < 2629746) {
    return `${Math.floor(secs / 604800)} hafta önce`
  } else if (secs >= 2629746 && secs < 31556952) {
    return `${Math.floor(secs / 2629746)} ay önce`
  }
}
