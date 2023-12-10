import PaylusEstudio from '@assets/icons/PaylusEstudio'
import { Button, Input, Link } from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

function LoginPage () {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <main className='w-full min-h-screen bg-content1 flex flex-col'>
      <img
        className='w-screen h-screen object-cover absolute top-0 pointer-events-none select-none opacity-20 grayscale'
        src='/images/app/bg-login.png'
        alt=''
      />
      <div className='flex justify-center absolute top-7 left-1/2 z-20 -translate-x-1/2'>
        <motion.div
          animate={isLoading ? 'loading' : 'initial'}
          variants={{
            initial: { y: 0, scale: 1, transition: { duration: 0.4, ease: [0.45, 0.46, 0.4, 1] } },
            loading: { y: '40vh', scale: 2, transition: { duration: 1, ease: [0.48, 0.21, 0.17, 1] } }
          }}
          transition={{ type: 'just' }}
        >
          <PaylusEstudio.Horizontal
            darkmode
            tagline
            className='w-40'
            onClick={() => setIsLoading(!isLoading)}
          />
        </motion.div>
      </div>

      <div className='grow overflow-hidden flex justify-center items-center relative z-10'>
        <AnimatePresence>
          {!isLoading && (
            <motion.div
              className='grow py-28 px-5 flex justify-center items-center'
              initial={{ translateY: '100vh', transition: { duration: 0.33, ease: [0.45, 0.46, 0.4, 1] } }}
              animate={{ translateY: 0, transition: { duration: 0.33, ease: [0.45, 0.46, 0.4, 1] } }}
              exit={{ translateY: '100vh', transition: { duration: 0.7, ease: [0.45, 0.46, 0.4, 1] } }}
              transition={{ type: 'just' }}
            >
              <div className='w-full max-w-lg mx-auto p-7 bg-content1 border-2 border-content3 rounded-lg'>
                <header className='text-center mb-5'>
                  <span className='uppercase text-lg font-semibold tracking-wider opacity-50'>Welcome back</span>
                  <h1 className='text-3xl font-semibold'>Log into yout account</h1>
                </header>
                <form>
                  <Input label='Email' />
                  <Input label='Password' />
                  <Button onClick={() => setIsLoading(!isLoading)}>Login now</Button>
                </form>
                <footer>Not register yet? <Link href='/registrarse'>Registrarse</Link></footer>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}

export default LoginPage
