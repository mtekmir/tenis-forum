import sgMail from '@sendgrid/mail'
import { MailData, EmailSendResponse } from './types'

type Response = Promise<[EmailSendResponse, {}]>
export interface EmailService {
  sendEmail: (o: MailData) => Response
  sendConfirmationEmail: (to: string, link: string) => Response
  sendPasswordResetEmail: (to: string, link: string) => Response
}

export const EmailService: () => Promise<EmailService> = async () => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const sendEmail = async (options: MailData) => {
    return sgMail.send(options as any)
  }

  const sendConfirmationEmail = async (to: string, link: string) => {
    return sendEmail({
      from: 'mert09581@gmail.com',
      to,
      subject: 'Lutfen email adresinizi dogrulayin',
      text: `<a href="${link}">link</a>`,
    })
  }

  const sendPasswordResetEmail = async (to: string, link: string) => {
    return sendEmail({
      from: 'info@tenisforum.com',
      to,
      subject: 'Sifre sifirlama',
      text: `<a href="${link}">link</a>`,
    })
  }

  return {
    sendEmail,
    sendConfirmationEmail,
    sendPasswordResetEmail,
  }
}
