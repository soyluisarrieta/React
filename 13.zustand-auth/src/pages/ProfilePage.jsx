import { useAuthStore } from '../store/auth'

function ProfilePage () {
  const user = useAuthStore(state => state.user)
  console.log(user)
  return (
    <main className='min-h-screen h-full p-5 flex flex-col justify-center items-center'>
      <h1 className='text-3xl sm:text-4xl font-semibold text-slate-200 mb-3 text-center'>Profile</h1>
      <hr className='border-red border w-10 mb-5' />
      <p className='text-slate-300 font-medium text-2xl'>{user.name} {user.lastname}</p>
      <p className='text-slate-500 text-sm'>{user.email}</p>
    </main>
  )
}

export default ProfilePage
