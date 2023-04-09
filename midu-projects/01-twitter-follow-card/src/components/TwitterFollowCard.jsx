import '../App.css'

function TwitterFollowCard({userName, name, isFollowing = false}) {

  return (
    <article className="App tw-followCard">
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt={`Avatar de ${name}`} />

        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
