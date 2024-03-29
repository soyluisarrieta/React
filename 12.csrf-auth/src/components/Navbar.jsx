import { Button, Navbar as NavbarContainer, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, User } from '@nextui-org/react'
import { AcmeLogo } from '../assets/icons/AcmeLogo'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/auth/useAuth'

const menuItems = [
  'Profile',
  'Dashboard',
  'Activity',
  'Analytics',
  'System',
  'Deployments',
  'My Settings',
  'Team Settings',
  'Help & Feedback',
  'Log Out'
]

function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useAuth()

  const navigate = useNavigate()

  return (
    <NavbarContainer
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <AcmeLogo />
          <p className='font-bold text-inherit'>ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarBrand>
          <AcmeLogo />
          <p className='font-bold text-inherit'>ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link to='/home'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/users'>
            Users
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        {!user
          ? (
            <>
              <NavbarItem>
                <Button color='foreground' variant='solid' onClick={() => navigate('/login')}>
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button color='primary' variant='shadow' onClick={() => navigate('/register')}>
                  Register
                </Button>
              </NavbarItem>
            </>)
          : (
            <NavbarItem>
              <NavLink to='/profile'>
                <User
                  as='button'
                  name={user.name}
                  description={user.email}
                  className='transition-transform'
                  avatarProps={{
                    src: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
                  }}
                />
              </NavLink>
            </NavbarItem>
            )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2
                  ? 'warning'
                  : (index === menuItems.length - 1 ? 'danger' : 'foreground')
              }
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarContainer>
  )
}

export default Navbar
