<script>
  import { onMount } from 'svelte'
  import Parallax from '$lib/components/Parallax.svelte'

  onMount(() => {
    console.log('scrolling to top of page...')
    window.scrollTo(0, 0)
  })

  const images = [
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/1IGi4TQytIa_FwuCq1IdZ4.png?token=',

    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/17R95KgJXEm_9WbBvAOiHK.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/3WMNB5Od6U5_ZxqxoVEVxU.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/2XAW74SU1Ec_9ROc8sEzqu.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/4oIQ6emgZ2Y_IZPSuTvosR.png?token=', // end of TGI

    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/15FaXDKcPAK_kmL9VahvYT.png?token=', // nissan
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/2B8uAzPSTME_dqvMjxJMIz.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/3IU1SalUQol_YuT78jH5Zq.png?token=',

    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/image_76_P54hgI4IDy.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/image_78_EPKFbRzves.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/bloom_KWjSH0PDNf.gif?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/sketch3_tinHSejyDe.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/green2_lHp2YmE4q3.png?token=',
    // 'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/tgi_NjI0NSRDlL.gif?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/speak2_LuASHwMJrg.gif?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/speak_USPSjOOjJA.gif?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/speak_USPSjOOjJA.gif?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/compressed_jEVD9tf6vV.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/screenshot_2024_01_05_at_6_16_itU6sO6i6h.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/image_67_DFeuRdEIIu.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/image_64_kP4XEFnNyw.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/ak09rb3bdh6bj3e/last_RDgfoNaqu7.png?token=',
  ]
</script>

<svelte:head>
  <title>Zakia Rowlett | Work</title>
  <meta name="description" content="Professional Work" />
</svelte:head>

<Parallax {images} />
