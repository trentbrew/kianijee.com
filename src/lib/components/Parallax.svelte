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
        class="scroll-area"
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
    scroll-snap-align: start;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
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
