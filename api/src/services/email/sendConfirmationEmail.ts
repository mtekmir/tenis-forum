import nodemailer from 'nodemailer'

export const sendConfirmationEmail = async (email: string, link: string) => {
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

  const mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: 'bar@example.com, baz@example.com', // list of receivers
    subject: 'Hello ✔',
    text: 'Click the link ',
    html: '<b>Hello world?</b>' + `<a href="${link}">link</a>`,
  }

  const info = await transporter.sendMail(mailOptions)

  console.log('Message sent: %s', info.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}
