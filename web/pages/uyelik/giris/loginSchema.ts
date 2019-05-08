import * as Yup from 'yup';

export const validateLogin: { [key: string]: any } = {
  email: Yup.string()
    .email('Geçersiz E-Posta')
    .required(''),
  password: Yup.string()
    .min(4)
    .max(50)
    .required(''),
};
