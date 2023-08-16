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
      if (index === 0) console.clear()
      const img = document.getElementById(`image-${index}`)
      const client = document.documentElement.clientHeight
      const getHeight = () => (img.height > client ? img.height : client)
      const getOffset = () => ($scroll.value - img.offsetTop) / 2
      return `height: ${getHeight()}px; object-position: 0px ${getOffset()}px;`
    }
  }
</script>

<div>
  <Back href="/#_work" />
  {#each images as src, i}
    {#if src}
      <img
        {src}
        id={`image-${i}`}
        class="object-cover w-screen h-full"
        style={parallax(i)}
        alt="work"
      />
    {/if}
  {/each}
</div>
