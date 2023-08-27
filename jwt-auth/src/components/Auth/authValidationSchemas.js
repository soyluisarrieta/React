import * as yup from 'yup'

const MESSAGES = {
  name: {
    min: 'Name must be at least 3 characters',
    required: 'Name is required'
  },
  lastname: {
    min: 'Lastname must be at least 3 characters',
    required: 'lastname is required'
  },
  email: {
    required: 'Email is required',
    format: 'Invalid email format',
    regex: 'Invalid email address'
  },
  password: {
    min: 'Password must be at least 6 characters',
    required: 'Password is required',
    regex: 'Must contain at least one letter and one number'
  },
  passwordConfirmation: {
    required: 'Password confirmation is required',
    notMatch: 'Passwords not match'
  }
}

const REGEX = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)/
}

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(MESSAGES.email.format)
    .required(MESSAGES.email.required)
    .matches(REGEX.email, MESSAGES.email.regex),
  password: yup
    .string()
    .min(6, MESSAGES.password.min)
    .required(MESSAGES.password.required)
    // .matches(REGEX.password, MESSAGES.password.regex)
})

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, MESSAGES.name.min)
    .required(MESSAGES.name.required),
  lastname: yup
    .string()
    .min(3, MESSAGES.lastname.min)
    .required(MESSAGES.lastname.required),
  email: yup
    .string()
    .email(MESSAGES.email.format)
    .required(MESSAGES.email.required)
    .matches(REGEX.email, MESSAGES.email.regex),
  password: yup
    .string()
    .min(6, MESSAGES.password.min)
    .required(MESSAGES.password.required)
    .matches(REGEX.password, MESSAGES.password.regex),
  passwordConfirmation: yup
    .string()
    .required(MESSAGES.passwordConfirmation.required)
    .oneOf([yup.ref('password'), null], MESSAGES.passwordConfirmation.notMatch)
})
