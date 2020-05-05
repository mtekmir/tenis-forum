import { format, differenceInMinutes } from 'date-fns'
import { tr } from 'date-fns/locale'

export const formatDate = (date: Date) => 
  format(new Date(date), 'd MMMM yyyy', { locale: tr })


export const formatDateWithTime = (date?: string | Date) =>
  date ? format(new Date(date), 'd MMMM yyyy - HH:mm', { locale: tr }) : ''

  export const diffInMin = (date1: string | Date, date2: string | Date) => 
    differenceInMinutes(new Date(date1), new Date(date2))