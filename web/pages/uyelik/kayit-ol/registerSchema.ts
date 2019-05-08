import * as Yup from 'yup';

export const validateRegister: { [key: string]: any } = {
  email: Yup.string()
    .email('Geçersiz E-Posta')
    .required(''),
  username: Yup.string()
    .min(4)
    .max(30)
    .required(''),
  password: Yup.string()
    .min(4)
    .max(50)
    .required(''),
};
