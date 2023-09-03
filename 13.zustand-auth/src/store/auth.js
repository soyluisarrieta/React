import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuth: false,

      setUser: (user) => set((state) => ({
        user,
        isAuth: true
      })),

      logout: () => set(() => ({
        user: null,
        isAuth: false
      }))
    }),
    { name: 'user' }
  )
)
