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
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_1_AE3gY66JdD.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_3_iBZgIJKx4f.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_4_4tmCgtjnG6.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_5_nCFso4FbNb.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_6_Vkpkw3n4RW.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_7_vUsFdsNr0u.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_8_1VEJjP7xVh.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_9_l1PIo0cHFU.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_10_aw3No8MwgI.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_12_yRsBRrdt4r.png?token=',
  ]
</script>

<div>
  <a
    href="/#_work"
    class="hoverable fixed bg-white mix-blend-difference backdrop-blur-xl h-12 w-12 top-8 left-8 rounded-full flex justify-center items-center"
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
