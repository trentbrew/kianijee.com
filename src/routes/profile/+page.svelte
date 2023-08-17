<script>
  import { onMount } from 'svelte'
  import { scroll } from '../store'
  import Profile from '$lib/images/profile.png'

  let parallax
  let scrollHeight

  $: parallax = (offsetTop = 0, speed = 0.5) => {
    return `background-position: 0px ${($scroll.value - offsetTop) * speed}px;`
  }

  onMount(() => {
    scrollHeight = document.getElementById('profile').scrollHeight
  })
</script>

<svelte:head>
  <title>Zakia Rowlett | Profile</title>
  <meta name="description" content="About Zakia" />
</svelte:head>

<section id="profile" class="w-full h-[300vh]">
  <div
    class="w-full h-full bg-cover"
    style={`background-image: url(${Profile}); ${parallax(1200)}`}
  >
    <div
      class="overflow-hidden absolute w-full"
      style="height: {scrollHeight}px"
    >
      <div class="noisy h-full" />
    </div>
    <div class="content" />
  </div>
</section>
