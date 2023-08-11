<script>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { onMount } from 'svelte'

  gsap.registerPlugin(ScrollTrigger)

  const images = [
    [
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/1_6_lrKGt0qBH5.png?token=',
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/1_7_m5NDjDSFy5.png?token=',
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/1_5_eASPanmpLW.png?token=',
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/1_1_ZKuFwXr1AL.png?token=',
      // 'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/1_2_4NZdIGJ1fw.png?token=',
    ],
    [
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/2_6_mZn1IrcDSs.png?token=',
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/2_4_vk7gpSo73R.png?token=',
      'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/2_5_ypK9TBM2jx.png?token=',
      // 'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/2_1_jEoWPrjyA6.png?token=',
      // 'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/2_2_PA4qF3XeQL.png?token=',
      // 'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/2_3_a8r9ooG8Ky.png?token=',
      // 'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/2_7_Ob4S78DKhL.png?token=',
      // 'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/krxqpgwegx276x7/2_8_ZrRdbEGW0I.png?token=',
    ],
  ]

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
    <section class="demo-gallery hoverable">
      <a href="#" class="hoverable">
        <ul class="wrapper hoverable">
          {#each images[0] as image}
            <li class="hoverable">
              <img src={image} class="hoverable" />
            </li>
          {/each}
        </ul>
      </a>
    </section>
    <section class="demo-gallery hoverable">
      <a href="#" class="hoverable">
        <ul class="wrapper hoverable">
          {#each images[1] as image}
            <li class="hoverable">
              <img src={image} class="hoverable" />
            </li>
          {/each}
        </ul>
      </a>
    </section>
  </div>
</div>

<style>
  .demo-gallery {
    /* filter: grayscale(1);/ */
    cursor: pointer;
    transition: 300ms;
  }
  .demo-gallery:hover {
    /* filter: grayscale(0); */
    transform: scale(0.95);
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
    /* font-weight: 900; */
  }
</style>
