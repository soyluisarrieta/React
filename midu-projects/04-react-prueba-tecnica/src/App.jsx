import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const PREFIX_IMAGE_URL = 'https://fakeimg.pl/500x500/282828/eae0d0/?font_size=70&text='

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Obtener fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  // Obtener primeras 3 palabras
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    setImageUrl(threeFirstWords)
  }, [fact])

  return (
    <main>
      <h1>Hi</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={PREFIX_IMAGE_URL + imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}
