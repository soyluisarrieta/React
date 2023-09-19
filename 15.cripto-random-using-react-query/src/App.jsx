import { useQuery } from '@tanstack/react-query'

const getRandomNumberFromApi = async () => {
  const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const numberString = await res.text()
  // throw new Error('x,x) Error en la petición')
  return +numberString
}

function App () {
  const { data: number, isLoading, isFetching, isError, error, refetch } = useQuery(
    ['randomNumber'],
    getRandomNumberFromApi
  )

  return (
    <main style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>
        Número aleatorio:
        {isLoading ? '...' : number}
      </h1>
      {!isFetching && isError && (<h2>{`${error}`}</h2>)}

      <button onClick={() => refetch()} disabled={isFetching}>
        Nuevo número
      </button>
    </main>
  )
}

export default App
