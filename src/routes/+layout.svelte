<script>
  import './styles.css'
  import Header from './Header.svelte'
  // import LocomotiveScrollProvider from 'svelte-locomotive-scroll'
  // import 'locomotive-scroll/src/locomotive-scroll.scss'
</script>

<div class="app">
  <!-- <Header /> -->
  <!-- <LocomotiveScrollProvider
    options={{
      smooth: true,
    }}
    onLocationChange={scroll =>
      scroll.scrollTo(0, { duration: 2, disableLerp: false })}
    imageTarget={'.grid-item-media'}
  > -->
  <main>
    <slot />
  </main>
  <!-- </LocomotiveScrollProvider> -->
</div>
