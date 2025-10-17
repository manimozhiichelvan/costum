import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserStore = create(
  persist(
    (set) => ({
      name: '',
      setName: (value) => set({ name: value }),
    }),
    {
      name: 'user-storage', // key for local storage
    }
  )
)
