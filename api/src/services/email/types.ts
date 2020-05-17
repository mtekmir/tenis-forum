export type EmailData = string | { name?: string; email: string }
export interface MailContent {
  type: string
  value: string
}
export interface MailData {
  to?: EmailData | EmailData[]
  cc?: EmailData | EmailData[]
  bcc?: EmailData | EmailData[]

  from: EmailData
  replyTo?: EmailData

  sendAt?: number

  subject?: string
  text?: string
  html?: string
  content?: MailContent[]
}

export interface EmailSendResponse {
  statusCode: number
  body: any
  headers: any
  toString(): string
}
