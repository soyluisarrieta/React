import { Button } from '@nextui-org/react'

function App () {
  return (
    <div className='w-screen h-screen flex flex-col gap-7 justify-center  items-center'>
      <h1 className='text-5xl font-bold underline text-indigo-600'>
        Hello Tailwind 3!
      </h1>
      <Button color='primary' className='w-fit' size='lg'>
        Button
      </Button>
    </div>
  )
}

export default App
