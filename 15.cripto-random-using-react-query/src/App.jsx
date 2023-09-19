import { useRandom } from './hooks/useRandom'

function App () {
  const {
    data: number,
    isLoading,
    isFetching,
    isError,
    error,
    refetch
  } = useRandom()

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
