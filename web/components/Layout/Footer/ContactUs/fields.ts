import * as Yup from 'yup'

export const CONTACT_US_FIELDS = [
  { label: 'Isim', name: 'name' },
  { label: 'E-Posta', name: 'email' },
  { label: 'Konu', name: 'subject' },
  { label: 'Mesaj', name: 'message', type: 'textarea' },
]

export const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Zorunlu alan'),
  email: Yup.string()
    .email('Lutfen gecerli bir eposta adresi giriniz')
    .required('Zorunlu alan'),
  subject: Yup.string().required('Zorunlu alan'),
  message: Yup.string().required('Zorunlu alan'),
})
