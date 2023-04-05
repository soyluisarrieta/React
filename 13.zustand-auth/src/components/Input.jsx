function Input ({ className, ...props }) {
  return (
    <input className={`w-full text-sm leading-6 text-slate-300 placeholder:text-slate-500 rounded-md ring-1 ring-slate-900/10 shadow-sm p-3 hover:ring-slate-300 bg-slate-800 highlight-white/5 hover:bg-slate-700 ${className}`} {...props} />
  )
}

export default Input
