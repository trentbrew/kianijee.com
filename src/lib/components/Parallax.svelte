<script>
  import { onMount } from 'svelte'
  import { scroll } from '../../routes/store.js'
  import Back from '$lib/components/Back.svelte'

  export let images

  let parallax
  let mounted

  onMount(() => {
    mounted = true
  })

  $: parallax = index => {
    if (mounted) {
      console.log($scroll)
      const img = document.getElementById(`image-${index}`)
      const client = document.documentElement.clientHeight
      const getHeight = () => (img.height > client ? img.height : client)
      const getOffset = () => ($scroll.value - img.offsetTop) / 2
      return `height: ${getHeight()}px; object-position: 0px ${getOffset()}px;`
    }
  }
</script>

<Back href="/" />
<div class="scroll-container">
  {#each images as src, i}
    {#if src}
      <img
        {src}
        id={`image-${i}`}
        class="scroll-area object-cover w-screen h-full"
        style={parallax(i)}
        alt="work"
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
    scroll-snap-align: start;
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
