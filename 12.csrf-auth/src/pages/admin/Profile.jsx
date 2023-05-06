import { Button } from '@nextui-org/react'
import ProfileCard from '../../components/user/ProfileCard'
import useAuth from '../../hooks/auth/useAuth'

function Profile () {
  const { logout, loading } = useAuth()
  return (
    <section className='container mx-auto py-5'>
      <h1 className='font-semibold text-2xl text-center mb-3 '>Profile</h1>
      <ProfileCard />
      <div className='text-center mt-3'>
        <Button
          onClick={logout}
          color='primary'
          isLoading={loading}
        >
          {!loading && 'Logout'}
        </Button>
      </div>
    </section>
  )
}

export default Profile
