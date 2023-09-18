export const fetchUsers = async ({ pageParam = 1 }) => {
  return await fetch('http://localhost:3001/users')
    .then(async res => {
      if (!res.ok) { throw new Error('Error en la petición') }
      return await res.json()
    })
    .then(res => {
      // 🔹 Como estoy usando una API local sumularé la paginación
      // ---
      const startIndex = (pageParam - 1) * 3
      const endIndex = startIndex + 3
      const usersPaginated = res.results.slice(startIndex, endIndex)
      // ---

      return {
        users: usersPaginated,
        nextCursor: pageParam + 1
      }
    })
}
