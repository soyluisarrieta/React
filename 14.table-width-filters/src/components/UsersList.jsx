import React from 'react'

function UsersList ({ users }) {
  return (
    <table>
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
          : users.map(user =>
            (
              <tr key={user.id.value}>
                <td><img src={user.picture.thumbnail} /></td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td><button>Borrar</button></td>
              </tr>
            ))}
      </tbody>
    </table>
  )
}

export default UsersList
