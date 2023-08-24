import { useState } from 'react'
import { Button, Input, Link } from '@nextui-org/react'
import { EyeSlashFilledIcon } from '../../assets/icons/EyeSlashFilledIcon'
import { EyeFilledIcon } from '../../assets/icons/EyeFilledIcon'

function LoginForm () {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <form className='w-[500px] flex flex-col gap-4'>
      <Input
        isClearable
        type='email'
        label='Email'
        isRequired
      />
      <Input
        label='Password'
        type={isVisible ? 'text' : 'password'}
        isRequired
        endContent={
          <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
            {!isVisible
              ? (<EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />)
              : (<EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />)}
          </button>
      }
      />

      <div className='text-center'>
        <Button className='mb-3' type='submit' fullWidth variant='solid' color='primary'>Login</Button>
        <p className='font-light'>Are you not member? <Link className='font-semibold underline' href='#'>Sign up</Link></p>
      </div>
    </form>
  )
}

export default LoginForm
