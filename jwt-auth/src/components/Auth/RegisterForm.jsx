import { useState } from 'react'
import { Button, Input, Link } from '@nextui-org/react'
import { EyeSlashFilledIcon } from '../../assets/icons/EyeSlashFilledIcon'
import { EyeFilledIcon } from '../../assets/icons/EyeFilledIcon'

function RegisterForm () {
  const [isVisible, setIsVisible] = useState({ password: false, passwordConfirmation: false })
  const toggleVisibility = (toggleState) => setIsVisible({ ...isVisible, ...toggleState })

  return (
    <form className='w-[500px] flex flex-col gap-4'>
      <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
        <Input
          isClearable
          type='text'
          label='Name'
          isRequired
        />
        <Input
          isClearable
          type='text'
          label='Lastname'
          isRequired
        />
      </div>
      <Input
        isClearable
        type='email'
        label='Email'
        isRequired
      />
      <Input
        label='Password'
        type={isVisible.password ? 'text' : 'password'}
        isRequired
        endContent={
          <button className='focus:outline-none' type='button' onClick={() => toggleVisibility({ password: !isVisible.password })}>
            {!isVisible.password
              ? (<EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />)
              : (<EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />)}
          </button>
      }
      />
      <Input
        className='mb-4'
        label='Password confirmation'
        type={isVisible.passwordConfirmation ? 'text' : 'password'}
        isRequired
        endContent={
          <button className='focus:outline-none' type='button' onClick={() => toggleVisibility({ passwordConfirmation: !isVisible.passwordConfirmation })}>
            {!isVisible.passwordConfirmation
              ? (<EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />)
              : (<EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />)}
          </button>
      }
      />
      <div className='text-center'>
        <Button className='mb-3' type='submit' fullWidth variant='solid' color='primary'>Sign up</Button>
        <p className='font-light'>Are you member? <Link className='font-semibold underline' href='#'>Login</Link></p>
      </div>
    </form>
  )
}

export default RegisterForm
