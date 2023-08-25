import * as yup from 'yup'

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  lastname: yup
    .string()
    .min(3, 'Lastname must be at least 3 characters')
    .required('Lastname is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid email address'
    ),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      'Must contain at least one letter and one number'
    ),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords not match')
})
