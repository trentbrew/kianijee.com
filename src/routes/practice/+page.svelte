<script>
  import { onMount } from 'svelte'
  import Parallax from '$lib/components/Parallax.svelte'

  onMount(() => {
    console.log('scrolling to top of page...')
    window.scrollTo(0, 0)
  })

  const images = [
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/y2indpx5jelr6ad/wood_QbxpY9DJFr.gif?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/y2indpx5jelr6ad/ayanah_nrvRpBLVQv.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/y2indpx5jelr6ad/tri_CJEwTo2LiI.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/y2indpx5jelr6ad/image_60_KF2nuFeMlB.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/y2indpx5jelr6ad/halftones_gzeXbiYSfk.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/y2indpx5jelr6ad/halftones_gzeXbiYSfk.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/y2indpx5jelr6ad/lettering_16x9_2_sWCy0HKyvB.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/y2indpx5jelr6ad/final_portrait_16x9_tsNHHJTYqq.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/y2indpx5jelr6ad/clothy_16x9_tNlyBy1mUo.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/y2indpx5jelr6ad/last_BFjOKN8XQq.png?token=',
  ]
</script>

<svelte:head>
  <title>Zakia Rowlett | Work</title>
  <meta name="description" content="Practice" />
</svelte:head>

<Parallax {images} />
