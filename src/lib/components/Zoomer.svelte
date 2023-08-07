<script>
  import { onMount } from 'svelte'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  onMount(() => {
    let LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#scrollable-area',
        start: '-90% 0%',
        end: '800% 0%',
        pin: '#scrollable-area',
        scrub: true,
      },
    })

    LandingPageScrollTrigger.to(
      '#scrollable-area',
      { transform: 'translateY(-300vh)' },
      0
    )
      .to('#ImgWrapper #img5', { transform: 'translateZ(1800px)' }, 0)
      .to('#ImgWrapper #img2', { transform: 'translateZ(2000px)' }, 0)

      .to('#ImgWrapper #img10', { transform: 'translateZ(2800px)' }, 0)
      .to('#ImgWrapper #img8', { transform: 'translateZ(3000px)' }, 0)
      .to('#ImgWrapper #img7', { transform: 'translateZ(3500px)' }, 0)
      .to('#ImgWrapper #img9', { transform: 'translateZ(4000px)' }, 0)
      .to('#ImgWrapper #img7', { transform: 'translateZ(4500px)' }, 0)
      // .to('#ImgWrapper #img4', { transform: 'translateZ(4000px)' }, 0)
      .to('#ImgWrapper #img3', { transform: 'translateZ(5000px)' }, 0)
      .to('#ImgWrapper #img1', { transform: 'translateZ(5500px)' }, 0)
      .to('#ImgWrapper #img6', { transform: 'translateZ(6000px)' }, 0)
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
      id="img2"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_13_oHArlDGp4l.png?token="
      alt=""
    />
    <img
      id="img3"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_01_u0Xnjsjwuj.png?token="
      alt=""
    />
    <!-- <img
      id="img4"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_07_MC6g2pg4GU.png?token="
      alt=""
    /> -->
    <img
      id="img5"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_02_gaLzKTVulO.png?token="
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
    <img
      id="img10"
      src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_19_jZolUmn8r3.png?token="
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
    perspective: 3000px;
  }

  #ImgWrapper img {
    position: absolute;
    /* opacity: 0.3; */
  }

  #ImgWrapper #img1 {
    /* background: red; */
    z-index: 7;
    height: 50vh;
    bottom: 40%;
    right: 20%;
  }

  #ImgWrapper #img2 {
    /* background: green; */
    z-index: 0;
    height: 42vh;
    bottom: 5%;
    left: 5%;
  }

  #ImgWrapper #img3 {
    /* background: cyan; */
    z-index: 6;
    height: 35vh;
    bottom: 10%;
    right: 6%;
  }

  #ImgWrapper #img4 {
    /* background: blue; */
    z-index: 5;
    height: 30vh;
    bottom: 45%;
    left: 30%;
  }

  #ImgWrapper #img5 {
    /* background: purple; */
    z-index: -1;
    height: 50vh;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    margin: auto;
  }

  #ImgWrapper #img6 {
    /* background: pink; */
    z-index: 8;
    height: 75vh;
    left: 40%;
    bottom: -10%;
  }

  #ImgWrapper #img7 {
    /* background: magenta; */
    z-index: 4;
    height: 60vh;
    left: 14%;
    bottom: 5%;
  }
  #ImgWrapper #img8 {
    /* background: orange; */
    z-index: 2;
    height: 50vh;
    left: 5%;
    bottom: 28%;
  }
  #ImgWrapper #img9 {
    /* background: yellow; */
    z-index: 3;
    height: 60vh;
    right: 5%;
    bottom: 30%;
  }
  #ImgWrapper #img10 {
    /* background: brown; */
    z-index: 1;
    height: 70vh;
    left: 20%;
    bottom: 45%;
  }
</style>
