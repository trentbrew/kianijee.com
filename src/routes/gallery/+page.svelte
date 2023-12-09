<script>
  import Scroller from '@sveltejs/svelte-scroller'
  let index, offset, progress
</script>

<Scroller
  parallax={true}
  top={0.8}
  bottom={0.8}
  bind:index
  bind:offset
  bind:progress
>
  <img
    id="bg"
    slot="background"
    width="100%"
    height="100vh"
    class="object-cover"
    alt="background"
    src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/3d6ll0pih6hq9gh/features_led_oxDTvGZY2O.jpg?token="
  />

  <div slot="foreground">
    <section class="bg-blue-500">This is the first section.</section>
    <section>This is the second section.</section>
    <section class="bg-pink-500">This is the third section.</section>
  </div>
</Scroller>

<style>
  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  #bg {
    background-image: url(https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/3d6ll0pih6hq9gh/features_led_oxDTvGZY2O.jpg?token=);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
