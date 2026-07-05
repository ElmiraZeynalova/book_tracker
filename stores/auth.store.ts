import { create } from 'zustand'

type AuthStore = {
    email: string | null,
    userId: string | null,
    setEmail: (email: string) => void
    setUserId: (id: string) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
    email: null,
    userId: null,
    setEmail: (email) => set({email: email}),
    setUserId: (id) => set({userId: id})
}))