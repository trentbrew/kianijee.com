<script>
  import { onMount } from 'svelte'
  import Parallax from '$lib/components/Parallax.svelte'

  onMount(() => {
    console.log('scrolling to top of page...')
    window.scrollTo(0, 0)
  })

  const images = [
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_1_ApYtWDz6Yx.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_2_rTdBFxvJ0m.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_3_Ydy91D0D8I.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/4wqgt8x64w8bree/phonefix1_IPiydRM4pq.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/4wqgt8x64w8bree/phonefix2_PUyerCsrjh.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/3q5ywd9ujp2mt8a/image_59_Lxg7OrhYyu.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/3q5ywd9ujp2mt8a/image_60_OSmA0pyDHs.png?token=',
    // 'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_4_RrKi1ppHlv.png?token=',
    // 'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_5_hrkl5ANplx.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_6_dzFm049Ncb.png?token=',
  ]
</script>

<svelte:head>
  <title>Zakia Rowlett | Work</title>
  <meta name="description" content="Personal Work" />
</svelte:head>

<Parallax {images} />
