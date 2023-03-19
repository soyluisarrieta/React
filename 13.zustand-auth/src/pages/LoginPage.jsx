import Button from '../components/Button'
import Input from '../components/Input'

function LoginPage () {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.currentTarget[0].value
    const password = e.currentTarget[1].value
    console.log({ email, password })
  }

  return (
    <main className='min-h-screen h-full flex justify-center items-center'>
      <form className='max-w-md w-full h-fit mx-auto p-16 flex flex-col gap-2 -mt-32 bg-slate-800/10 rounded-3xl shadow-lg shadow-slate-950/70' onSubmit={handleSubmit}>
        <h1 className='text-3xl sm:text-4xl font-semibold text-slate-200 mb-3 text-center'>Login</h1>
        <Input type='email' name='email' placeholder='email@mail.com' />
        <Input type='password' name='passowrd' placeholder='********' />
        <Button type='submit'>Login</Button>
      </form>
    </main>
  )
}

export default LoginPage