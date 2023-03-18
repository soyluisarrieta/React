import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set((state) => ({ user }))
    }),
    { name: 'user' }
  )
)
