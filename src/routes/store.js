import { writable } from 'svelte/store'

export const global = writable({
  scroll: 0,
})
