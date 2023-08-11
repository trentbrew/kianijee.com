<script>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { onMount } from 'svelte'

  gsap.registerPlugin(ScrollTrigger)

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: '0% 0%',
        end: '200% 0%',
        scrub: 0.5,
        pin: true,
      },
    })

    gsap.utils.toArray('.demo-wrapper section').forEach((section, index) => {
      const w = section.querySelector('.wrapper')
      const [x, xEnd] =
        index % 2 ? ['10%', w.scrollWidth * -1] : [w.scrollWidth * -1, 0]

      tl.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
          },
        }
      )
    })
  })
</script>

<div>
  <div class="demo-wrapper">
    <section class="demo-text">
      <div class="wrapper text">
        <span class="flex w-[100vw] justify-end py-12">WORK</span>
      </div>
    </section>
    <section class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
      </ul>
    </section>
    <section class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://source.unsplash.com/random/1240x874?sig=67"
            alt=""
          />
        </li>
      </ul>
    </section>
  </div>
</div>

<style>
  img {
    width: 100%;
    height: auto;
    background: #f0f0f0;
  }

  ul {
    padding-left: 1rem;
    list-style: none;
  }

  li {
    flex-shrink: 0;
    width: clamp(500px, 60vw, 800px);
    padding-right: 1rem;
  }

  :any-link {
    color: #4e9815;
  }

  .df {
    display: flex;
  }
  .aic {
    align-items: center;
  }
  .jcc {
    justify-content: center;
  }

  .loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    color: white;
  }

  .demo-wrapper {
    overflow-x: hidden;
  }

  .wrapper {
    display: flex;
  }

  .demo-gallery:not(.last) {
    padding-bottom: 1rem;
  }

  .demo-text .text {
    font-family: 'League Gothic', sans-serif;
    font-size: 8rem;
    line-height: 1;
    /* font-weight: 900; */
  }
</style>
