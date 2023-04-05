function Button ({ children, className, ...props }) {
  return (
    <button className={`w-full text-center text-sm leading-5 font-medium text-sky-400 bg-sky-400/20 p-2 rounded hover:bg-sky-400/30 ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
