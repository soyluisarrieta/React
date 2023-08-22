import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

export default function App () {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const htmlClasses = document.documentElement.classList
    darkMode ? htmlClasses.add('dark') : htmlClasses.remove('dark')
  }, [darkMode])

  return (
    <div className='container mx-auto'>
      The current DarkMode is: {darkMode ? 'Dark Mode' : 'Light Mode'}
      <Button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Dark' : 'Light'} mode
      </Button>
    </div>
  )
}
