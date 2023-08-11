<script>
  import { onMount } from 'svelte'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  onMount(() => {
    let LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#scrollable-area',
        start: '-100% 0%',
        end: '800% 0%',
        pin: '#scrollable-area',
        scrub: true,
      },
    })

    LandingPageScrollTrigger.to(
      '#scrollable-area',
      { transform: 'translateY(-350vh)' },
      0
    )
      .to('#ImgWrapper #img5', { transform: 'translateZ(1500px)' }, 0)
      .to('#ImgWrapper #img8', { transform: 'translateZ(3000px)' }, 0)
      .to('#ImgWrapper #img9', { transform: 'translateZ(3500px)' }, 0)
      .to('#ImgWrapper #img7', { transform: 'translateZ(5500px)' }, 0)
      .to('#ImgWrapper #img3', { transform: 'translateZ(4600px)' }, 0)
      .to('#ImgWrapper #img1', { transform: 'translateZ(6000px)' }, 0)
      .to('#ImgWrapper #img6', { transform: 'translateZ(7000px)' }, 0)
  })
</script>

<div id="scrollable-area" class="absolute">
  <div id="ImgWrapper">
    <img
      id="img1"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_12_snh0kkc5Fb.png?token="
      alt=""
    />
    <img
      id="img3"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_19_jZolUmn8r3.png?token="
      alt=""
    />
    <img
      id="img5"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/3q5ywd9ujp2mt8a/halftone_5LxkXvUS1o.png?token="
      alt=""
    />
    <img
      id="img6"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_16_WoQO42aOs6.png?token="
      alt=""
    />
    <img
      id="img7"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_03_ojumUT07Xs.png?token="
      alt=""
    />
    <img
      id="img8"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_14_g8LlgDW9Ff.png?token="
      alt=""
    />
    <img
      id="img9"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_17_7ujxykx7bE.png?token="
      alt=""
    />
  </div>
</div>

<style>
  #ImgWrapper {
    background: white;
    position: relative;
    width: 100vw;
    height: 100vh;
    perspective: 4000px;
  }

  #ImgWrapper img {
    position: absolute;
  }

  #ImgWrapper #img1 {
    z-index: 7;
    height: 55vh;
    bottom: 40%;
    right: 18%;
  }

  #ImgWrapper #img3 {
    /* background: cyan; */
    z-index: 6;
    height: 75vh;
    bottom: 45%;
    right: 36%;
  }

  #ImgWrapper #img5 {
    /* background: purple; */
    z-index: -1;
    height: 80vh;
    bottom: -10%;
    right: 0;
    left: 0;
    top: 0;
    margin: auto;
  }

  #ImgWrapper #img6 {
    /* background: pink; */
    z-index: 8;
    height: 85vh;
    left: 42%;
    bottom: -18%;
  }

  #ImgWrapper #img7 {
    /* background: magenta; */
    z-index: 4;
    height: 80vh;
    left: 2%;
    bottom: -15%;
  }
  #ImgWrapper #img8 {
    /* background: orange; */
    z-index: 2;
    height: 90vh;
    left: -6%;
    bottom: 25%;
  }
  #ImgWrapper #img9 {
    /* background: yellow; */
    z-index: 3;
    height: 90vh;
    right: -10%;
    bottom: 30%;
  }
  #ImgWrapper #img10 {
    /* background: brown; */
    z-index: 1;
    height: 82vh;
    left: 8%;
    bottom: 46%;
  }
</style>
