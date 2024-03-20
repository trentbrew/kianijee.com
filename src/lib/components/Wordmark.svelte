<script>
  import { onMount } from 'svelte'
  import img1 from '$lib/images/wordmark.gif'
  import img2 from '$lib/images/final.png'

  let currentImg = img1
  let appear = false

  onMount(() => {
    // after 3.87 seconds, set appear to true
    setTimeout(() => {
      appear = true
    }, 3870)
    // after 7.74 seconds, swap img1 for img2
    setTimeout(() => {
      currentImg = img2
    }, 7740)
  })
</script>

<img
  style={`opacity: ${appear ? 1 : 0.01}`}
  class="scale-[1]"
  src={currentImg}
  alt="Wordmark"
/>
