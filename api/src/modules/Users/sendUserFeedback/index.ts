import { MutationResolvers } from '../../../types/schema'

export const userSendFeedback: MutationResolvers['userSendFeedback'] = async (
  _,
  { input: { email, message, subject, name } },
  { emailService, userId }
) => {
  try {
    userId && console.log(`Received feedback from user with id: ${userId}`)
    await emailService.sendEmail({
      to: 'm.tekmir@gmail.com',
      subject,
      from: `"${name}" <${email}>`,
      text: message,
    })

    return {
      success: true,
      error: [],
    }
  } catch (e) {
    return {
      success: false,
      error: [{ message: 'Something went wrong', path: '' }],
    }
  }
}
