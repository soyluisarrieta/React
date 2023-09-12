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
        {
          users.map(users => {
            return (
              <tr key={users.id}>
                <td>
                  <img src='' />
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default UsersList
