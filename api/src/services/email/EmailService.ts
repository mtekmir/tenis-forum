import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { SentMessageInfo } from 'nodemailer/lib/smtp-connection'

export interface EmailService {
  sendEmail: (o: Mail.Options) => Promise<SentMessageInfo>
}

export const EmailService: () => Promise<EmailService> = async () => {
  try {
    const account = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    })

    const sendEmail = async (options: Mail.Options) => transporter.sendMail(options)

    return {
      sendEmail,
    }
  } catch (err) {
    console.log(err)
  }
}
