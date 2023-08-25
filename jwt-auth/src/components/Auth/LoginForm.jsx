import axiosClient from '../../axios.client'

import { useState } from 'react'
import { Button, Link } from '@nextui-org/react'
import { EyeSlashFilledIcon } from '../../assets/icons/EyeSlashFilledIcon'
import { EyeFilledIcon } from '../../assets/icons/EyeFilledIcon'
import { Form, Formik } from 'formik'
import { loginValidationSchema } from './authValidationSchemas'
import InputFormik from './InputFormik'
import { ErrorServer } from './ErrorServer'

const initialValues = {
  email: '',
  password: ''
}

function LoginForm () {
  const [errMsg, setErrMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const onSubmit = async (payload) => {
    // console.log('Formulario enviado:', payload)
    try {
      setErrMsg('')
      setIsLoading(true)
      const response = await axiosClient.post('/login', payload)
      console.log({ response })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server response')
      } else if (err.response?.status === 404) {
        setErrMsg('User not exists')
      } else {
        setErrMsg('Login failed')
      }
    } finally {
      setTimeout(() => setIsLoading(false), 3000)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={onSubmit}
    >
      <Form className='w-[500px] flex flex-col gap-4'>
        <ErrorServer message={errMsg} />

        <InputFormik
          isClearable
          type='text'
          label='Email'
          name='email'
          isRequired
        />
        <InputFormik
          type={isPasswordVisible ? 'text' : 'password'}
          label='Password'
          name='password'
          isRequired
          endContent={
            <button className='focus:outline-none' type='button' onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
              {!isPasswordVisible
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
            {!isLoading && 'Login'}
          </Button>
          <p className='font-light'>Are you not member? <Link className='font-semibold underline' href='#'>Sign up</Link></p>
        </div>
      </Form>
    </Formik>
  )
}

export default LoginForm
