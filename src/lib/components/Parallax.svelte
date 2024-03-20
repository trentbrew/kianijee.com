<script>
  import { onMount } from 'svelte'
  import { scroll } from '../../routes/store.js'
  import Back from '$lib/components/Back.svelte'
  import { navigating } from '$app/stores'

  export let images

  let parallax
  let mounted

  onMount(() => {
    mounted = true
  })

  $: if ($navigating) {
    window.scrollTo(0, 0)
  }

  // $: parallax = index => {
  //   if (mounted) {
  //     const img = document.getElementById(`image-${index}`)
  //     const top = img.offsetTop
  //     console.log(top, $scroll.value)
  //     const height = img.naturalHeight
  //     const getOffset = () => ($scroll.value - top) / 1
  //     return `object-position: 50% ${getOffset()}px;`
  //   }
  // }
</script>

<Back href="/" />
<div class="scroll-container bg-black">
  {#each images as src, i}
    {#if src}
      <div
        id={`image-${i}`}
        class="scroll-area aspect-video"
        style={`background-image: url(${src})`}
      />
    {/if}
  {/each}
</div>

<style>
  .scroll-container {
    overflow: auto;
    scroll-snap-type: y mandatory;
  }

  .scroll-area {
    width: 100vw;
    height: 100vh;
    aspect-ratio: 16 / 9 !important;
    scroll-snap-align: start;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 75%;
    background-color: white;
  }

  @media (max-width: 600px) {
    .scroll-area {
      background-attachment: normal;
    }
  }

  .scroll-container,
  .scroll-area {
    margin: 0 auto;
  }

  .scroll-area {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
</style>
