import { Button } from '@nextui-org/react'
import ProfileCard from '../../components/user/ProfileCard'
import useLogout from '../../hooks/auth/useLogout'
import { useNavigate } from 'react-router-dom'

function Profile () {
  const navigate = useNavigate()
  const logout = useLogout()

  const onLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <section className='container mx-auto py-5'>
      <h1 className='font-semibold text-2xl text-center mb-3 '>Profile</h1>
      <ProfileCard />
      <div className='text-center mt-3'>
        <Button onClick={onLogout} color='primary'>Logout</Button>
      </div>
    </section>
  )
}

export default Profile
