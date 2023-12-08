import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Store profile data
export const useAuthStore = create(
  persist((set) => ({
    profile: null,

    setProfile: (userData) => set(() => ({
      profile: userData
    }))
  }), {
    name: 'auth'
  })
)

// Store session state
export const useSessionVerified = create((set) => ({
  sessionVerified: false,

  setSessionVerified: (newState) => set(() => ({
    sessionVerified: newState
  }))
}))
