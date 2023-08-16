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
      const image = document.getElementById(`image-${index}`)
      const clientHeight = document.documentElement.clientHeight
      const getHeight = () =>
        image.height > clientHeight ? image.height : clientHeight
      const getOffset = () => ($scroll.value - image.height) * index * 0.5
      console.log(index, image.height, clientHeight)
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
