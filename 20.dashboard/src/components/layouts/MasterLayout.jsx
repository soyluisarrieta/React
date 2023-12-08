import React from 'react'

function MasterLayout ({ className, children, ...props }) {
  const isDarkMode = true
  return (
    <div className={`w-full h-full min-h-screen text-foreground bg-background ${className} ${isDarkMode ? 'dark' : 'light'}`} {...props}>
      {children}
    </div>
  )
}

export default MasterLayout
