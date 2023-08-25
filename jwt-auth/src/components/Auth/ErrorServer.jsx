import { useEffect, useRef } from 'react'

function ErrorServer ({ message }) {
  const errorServerRef = useRef()

  useEffect(() => {
    if (message && errorServerRef.current) {
      const yOffset = -77
      const elementPosition = errorServerRef.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY + yOffset

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }, [message])

  return message && (
    <div ref={errorServerRef} className='px-4 py-3 rounded border border-red-600/70 bg-red-600/20'>
      <div className='font-light text-xs tracking-wide block border-b border-red-600/60 pb-1 mb-2 opacity-50'>❌ Something went wrong</div>
      <p className='opacity-90 text-sm'>{message}</p>
    </div>
  )
}

export { ErrorServer }
