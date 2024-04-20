<script>
  import './styles.css'
  import { onMount } from 'svelte'
  import { scroll } from './store.js'
  import Lenis from '@studio-freight/lenis'
  import Cursor from '$lib/components/Cursor.svelte'
  import Menu from '$lib/components/Menu.svelte'

  const lenis = new Lenis()
  const scrollData = scroll

  onMount(() => {
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      scrollData.update(state => ({
        value: scroll,
        limit,
        velocity,
        direction,
        progress,
      }))
    })
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
</script>

<div class="app">
  <!-- <Cursor /> -->
  <!-- <Menu /> -->
  <main>
    <slot />
  </main>
</div>
