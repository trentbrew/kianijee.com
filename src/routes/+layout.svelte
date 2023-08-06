<script>
  import './styles.css'
  import Lenis from '@studio-freight/lenis'
  import { onMount } from 'svelte'

  const lenis = new Lenis()

  onMount(() => {
    console.log('mounted layout')
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
</script>

<div class="app">
  <main>
    <slot />
  </main>
</div>
