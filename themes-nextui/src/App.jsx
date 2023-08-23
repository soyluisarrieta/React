import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

import { motion } from 'framer-motion'

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -10 }
}

const Dropdown = ({ label = 'Abrir', items = [] }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (newState) => {
    if (isOpen === newState) { return }
    setIsOpen(newState)
  }

  return (
    <div className='relative'>
      <Button
        onClick={() => handleToggle(!isOpen)}
        onBlur={() => handleToggle(false)}
      >
        {label}
      </Button>

      <motion.nav
        className='py-2 px-4 rounded absolute top-full mt-1 left-0 bg-indigo-600 shadow-lg shadow-indigo-700 flex flex-col gap-1'
        initial='closed' // Estado inicial cerrado
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.15 }}
        variants={variants}
      >
        {items.map((item, i) => (
          <a key={i} href={`#dropdown${i}`}>{item}</a>
        ))}
      </motion.nav>
    </div>
  )
}

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

      <Dropdown
        label='Click here!'
        items={['Item 1', 'Item 2', 'Item 3']}
      />
    </div>
  )
}
