import Button from '../components/Button'
import Input from '../components/Input'
import { csrf, loginRequest, profileRequest } from '../services/auth'
import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router-dom'

function LoginPage () {
  const setUser = useAuthStore(state => state.setUser)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.currentTarget[0].value
    const password = e.currentTarget[1].value
    try {
      await csrf()
      await loginRequest({ email, password })
      const response = await profileRequest()
      setUser(response.data)
      navigate('/profile')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className='min-h-screen h-full p-5 flex justify-center items-center'>
      <form className='max-w-md w-full h-fit mx-auto p-16 flex flex-col gap-2 bg-slate-800/10 rounded-3xl shadow-lg shadow-slate-950/70' onSubmit={handleSubmit}>
        <h1 className='text-3xl sm:text-4xl font-semibold text-slate-200 mb-3 text-center'>Login</h1>
        <Input type='email' name='email' placeholder='email@mail.com' />
        <Input type='password' name='passowrd' placeholder='********' />
        <Button type='submit'>Login</Button>
      </form>
    </main>
  )
}

export default LoginPage
