import LoginForm from '../../components/auth/LoginForm'

function Login () {
  return (
    <section className='container mx-auto flex items-center flex-col py-16 px-3'>
      <h1 className='mb-5 text-3xl font-semibold'>Login</h1>
      <LoginForm />
    </section>
  )
}

export default Login
