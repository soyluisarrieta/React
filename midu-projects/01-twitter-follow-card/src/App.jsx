import './App.css'

function App() {

  return (
    <article className="App tw-followCard">
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://unavatar.io/gravatar/luisarrieta796@gmail.com" alt="Avatar de Luis Arrieta" />

        <div className='tw-followCard-info'>
          <strong>Luis Eduardo Arrieta Avilez</strong>
          <span className='tw-followCard-infoUserName'>@SoyLuisArrieta</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  )
}

export default App
