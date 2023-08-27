import axiosClient from '../../axios.client.js'

import { useState } from 'react'
import { Form, Formik } from 'formik'
import { registerValidationSchema } from './authValidationSchemas'
import InputFormik from './InputFormik'
import { Button } from '@nextui-org/react'
import { EyeSlashFilledIcon } from '../../assets/icons/EyeSlashFilledIcon'
import { EyeFilledIcon } from '../../assets/icons/EyeFilledIcon'
import { ErrorServer } from './ErrorServer'
import { Link } from 'react-router-dom'

const initialValues = {
  name: '',
  lastname: '',
  email: '',
  passwordConfirmation: '',
  password: ''
}

function RegisterForm () {
  const [errMsg, setErrMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState({
    password: false,
    passwordConfirmation: false
  })

  const passwordVisibility = (toggleState) => setIsPasswordVisible({ ...isPasswordVisible, ...toggleState })

  const onSubmit = async (payload) => {
    // console.log('Formulario enviado:', payload)
    try {
      setErrMsg('')
      setIsLoading(true)
      const response = await axiosClient.post('/auth/register', payload)
      console.log({ response })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server response')
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken')
      } else {
        setErrMsg('Registration failed')
      }
    } finally {
      setTimeout(() => setIsLoading(false), 3000)
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerValidationSchema}
      onSubmit={onSubmit}
    >
      <Form className='w-[500px] flex flex-col gap-4'>
        <ErrorServer message={errMsg} />

        <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
          <InputFormik
            isClearable
            type='text'
            label='Name'
            name='name'
            isRequired
          />
          <InputFormik
            isClearable
            type='text'
            label='Lastname'
            name='lastname'
            isRequired
          />
        </div>
        <InputFormik
          isClearable
          type='text'
          label='Email'
          name='email'
          isRequired
        />
        <InputFormik
          type={isPasswordVisible.password ? 'text' : 'password'}
          label='Password'
          name='password'
          isRequired
          endContent={
            <button className='focus:outline-none' type='button' onClick={() => passwordVisibility({ password: !isPasswordVisible.password })}>
              {!isPasswordVisible.password
                ? (<EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />)
                : (<EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />)}
            </button>
          }
        />
        <InputFormik
          type={isPasswordVisible.passwordConfirmation ? 'text' : 'password'}
          label='Password confirmation'
          name='password_confirmation'
          isRequired
          endContent={
            <button className='focus:outline-none' type='button' onClick={() => passwordVisibility({ passwordConfirmation: !isPasswordVisible.passwordConfirmation })}>
              {!isPasswordVisible.passwordConfirmation
                ? (<EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />)
                : (<EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />)}
            </button>
          }
        />

        <div className='text-center mt-3'>
          <Button
            className='mb-3'
            type='submit'
            fullWidth
            color='primary'
            isLoading={isLoading}
          >
            {!isLoading && 'Sign up'}
          </Button>
          <p className='font-light'>Are you member? <Link className='font-semibold underline' to='/login'>Login</Link></p>
        </div>
      </Form>
    </Formik>
  )
}

export default RegisterForm
