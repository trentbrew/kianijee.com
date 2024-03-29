import { writable } from 'svelte/store'

export const scroll = writable({
  value: 0,
  limit: 0,
  velocity: 0,
  direction: 0,
  progress: 0,
})
