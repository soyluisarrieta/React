import RegisterForm from '../../components/Auth/RegisterForm'

function Register () {
  return (
    <section className='container mx-auto flex items-center flex-col py-16 px-3'>
      <h1 className='mb-5 text-3xl font-semibold'>Sign up</h1>
      <RegisterForm />
    </section>
  )
}

export default Register
