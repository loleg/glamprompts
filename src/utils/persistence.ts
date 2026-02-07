import { create } from 'zustand'

export const persistence = create((set) => ({
  prompts: {}
}))
