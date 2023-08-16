<script>
  import Icon from '$lib/components/Icon.svelte'
  export let href = '#'
</script>

<a
  {href}
  class="hoverable fixed bg-white mix-blend-difference backdrop-blur-[12px] backdrop-contrast-[2] h-12 w-12 top-8 left-8 rounded-full flex justify-center items-center"
>
  <div class="pointer-events-none">
    <Icon name="arrow_left" color="black" size={36} />
  </div>
</a>
