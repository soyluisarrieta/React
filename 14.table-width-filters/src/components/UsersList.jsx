import React from 'react'

function UsersList ({ users, showColors }) {
  console.log(showColors)
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {!users.length
          ? 'No hay datos...'
          : users.map((user, i) => {
            const color = i % 2 === 0 ? '#333' : '#555'
            const backgroundColor = showColors ? color : 'transparent'

            return (
              <tr key={i} style={{ backgroundColor }}>
                <td><img src={user.picture.thumbnail} /></td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td><button>Borrar</button></td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default UsersList
