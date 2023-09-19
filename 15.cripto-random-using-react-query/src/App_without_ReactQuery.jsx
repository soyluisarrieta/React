import { useReducer, useEffect, useState } from 'react'

const getRandomNumberFromApi = async () => {
  const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const numberString = await res.text()
  // throw new Error('x,x) Error en la petición')
  return +numberString
}

function App () {
  const [number, setNumber] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const [key, forceRefetch] = useReducer(x => x + 1, 0)

  useEffect(() => {
    setIsLoading(true)
    getRandomNumberFromApi()
      .then(setNumber)
      .catch(err => setError(err.message))
  }, [key])

  useEffect(() => {
    if (number) setIsLoading(false)
  }, [number])

  useEffect(() => {
    if (error) setIsLoading(false)
  }, [error])

  return (
    <main style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>
        Número aleatorio:
        {isLoading ? '...' : number}
      </h1>
      {!isLoading && error && (<h2>{error}</h2>)}

      <button onClick={forceRefetch} disabled={isLoading}>
        Nuevo número
      </button>
    </main>
  )
}

export default App
