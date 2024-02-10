import { ModeToggle } from '@/components/mode-toggle'
import Users from '@/users'

function App (): JSX.Element {
  return (
    <>
      <header className='border-b'>
        <div className='container flex items-center justify-between py-3 px-5'>
          <span className='text-xl'><strong>CRUD</strong> con Shadcn y Laravel API</span>
          <ModeToggle />
        </div>
      </header>
      <main>
        <Users />
      </main>
    </>
  )
}

export default App
