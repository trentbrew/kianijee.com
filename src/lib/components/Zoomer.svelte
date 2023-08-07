<script>
  import { onMount } from 'svelte'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  onMount(() => {
    let LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#ImgWrapper',
        start: '0% 0%',
        end: '100% 0%',
        pin: '#ImgWrapper',
        scrub: 1,
      },
    })

    LandingPageScrollTrigger.to(
      '#ImgWrapper #img7',
      { transform: 'translateZ(4500px)' },
      0
    )
      .to('#ImgWrapper #img6', { transform: 'translateZ(3700px)' }, 0)
      .to('#ImgWrapper #img5', { transform: 'translateZ(3100px)' }, 0)
      .to('#ImgWrapper #img4', { transform: 'translateZ(2800px)' }, 0)
      .to('#ImgWrapper #img3', { transform: 'translateZ(2600px)' }, 0)
      .to('#ImgWrapper #img2', { transform: 'translateZ(2400px)' }, 0)
      .to('#ImgWrapper #img1', { transform: 'translateZ(2200px)' }, 0)
  })
</script>

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
  <img
    id="img4"
    src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/qqdd0un1v32mr8g/website_assets_07_MC6g2pg4GU.png?token="
    alt=""
  />
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
</div>

<style>
  #ImgWrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    perspective: 2200px;
  }

  #ImgWrapper img {
    position: absolute;
  }

  #ImgWrapper #img1 {
    z-index: 1;
    height: 40vh;
    bottom: 15%;
    left: 6%;
  }

  #ImgWrapper #img2 {
    z-index: 2;
    height: 30vh;
    bottom: 50%;
    right: 8%;
  }

  #ImgWrapper #img3 {
    z-index: 3;
    height: 32vh;
    bottom: 50%;
    right: 24%;
  }

  #ImgWrapper #img4 {
    z-index: 4;
    height: 24vh;
    bottom: 68%;
    left: 20%;
  }

  #ImgWrapper #img5 {
    z-index: 5;
    height: 36vh;
    bottom: 10%;
    left: 47%;
  }

  #ImgWrapper #img6 {
    z-index: 6;
    height: 52vh;
    left: 25%;
    bottom: 25%;
  }

  #ImgWrapper #img7 {
    z-index: 7;
    height: 36vh;
    right: 15%;
    bottom: 6%;
  }
</style>
