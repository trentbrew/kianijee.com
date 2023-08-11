<script>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { onMount } from 'svelte'

  gsap.registerPlugin(ScrollTrigger)

  const images = [
    [
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_5_hrkl5ANplx.png?token=',
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_1_ApYtWDz6Yx.png?token=',
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_3_Ydy91D0D8I.png?token=',
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/bzgm69ccc4729q5/1_6_27sz7WSk0X.png?token=',
    ],
    [
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_3_iBZgIJKx4f.png?token=',
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_4_4tmCgtjnG6.png?token=',
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/a0tcc2t1zqmxlle/2_14_Ultg2xs2dD.png?token=',
    ],
  ]

  const hints = ['VIEW', 'VIEW']

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: '0% 0%',
        end: '100% 0%',
        scrub: 0.5,
        pin: true,
      },
    })

    gsap.utils.toArray('.demo-wrapper section').forEach((section, index) => {
      const w = section.querySelector('.wrapper')
      const [x, xEnd] =
        index % 2 ? ['200%', w.scrollWidth * -1] : [w.scrollWidth * -1, 0]

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
    <div data-hover-icon="fullscreen">
      <section class="demo-gallery" data-hover-icon="fullscreen">
        <a href="/work1">
          <ul class="wrapper">
            {#each images[0] as image}
              <li data-hover-icon="fullscreen">
                <img src={image} data-hover-icon="fullscreen" alt="work1" />
              </li>
            {/each}
          </ul>
        </a>
      </section>
      <section class="demo-gallery" data-hover-icon="fullscreen">
        <a href="/work2">
          <ul class="wrapper">
            {#each images[1] as image}
              <li data-hover-icon="fullscreen">
                <img src={image} data-hover-icon="fullscreen" alt="work2" />
              </li>
            {/each}
          </ul>
        </a>
      </section>
    </div>
  </div>
</div>

<style>
  .demo-gallery {
    cursor: pointer;
    transition: 300ms;
  }
  .demo-gallery:hover {
    filter: brightness(0.95);
    transform: scale(0.96);
  }
  .demo-gallery:active {
    filter: brightness(0.9);
    transform: scale(0.93);
  }
  img {
    width: 100%;
    aspect-ratio: 16/9;
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
  }
</style>
