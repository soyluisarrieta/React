import Navbar from '../components/Navbar'

function PublicLayout ({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default PublicLayout
