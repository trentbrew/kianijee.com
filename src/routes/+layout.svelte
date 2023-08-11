<script>
  import './styles.css'
  import { onMount } from 'svelte'
  import { scrollData } from './store.js'
  import Lenis from '@studio-freight/lenis'
  import Cursor from '$lib/components/Cursor.svelte'

  const lenis = new Lenis()

  onMount(() => {
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      scrollData.update(state => ({
        scroll,
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
  <main>
    <Cursor />
    <slot />
  </main>
</div>
