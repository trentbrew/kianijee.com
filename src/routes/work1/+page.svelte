<script>
  import { onMount } from 'svelte'
  import { scroll } from '../store.js'
  import Icon from '$lib/components/Icon.svelte'

  let parallax
  let mounted

  onMount(() => {
    mounted = true
  })

  $: parallax = index => {
    if (mounted) {
      const image = document.getElementById(`image-${index}`)
      console.log(index, { image }, image.height)
      return `object-position: 0px ${
        ($scroll.value - image.height) * index * 0.5
      }px;`
    }
  }

  const sources = [
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_1_ApYtWDz6Yx.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_2_rTdBFxvJ0m.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_3_Ydy91D0D8I.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_4_RrKi1ppHlv.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_5_hrkl5ANplx.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_6_27sz7WSk0X.png?token=',
  ]
</script>

<div>
  <a
    href="/#_work"
    class="hoverable fixed bg-white h-12 w-12 top-8 left-8 rounded-full flex justify-center items-center"
  >
    <div class="pointer-events-none">
      <Icon name="arrow_left" color="black" size="36" />
    </div>
  </a>
  {#each sources as src, i}
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
