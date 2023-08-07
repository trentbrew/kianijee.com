<script>
  import { onMount } from 'svelte'
  import { scrollData } from './store.js'
  import gsap from 'gsap'
  import Image from '$lib/images/landing.gif'
  import Wordmark from '$lib/components/Wordmark.svelte'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  import Zoomer from '$lib/components/Zoomer.svelte'

  gsap.registerPlugin(ScrollTrigger)

  let scroll

  scrollData.subscribe(value => {
    scroll = value
    ScrollTrigger.update()
  })

  // let getRatio = el =>
  //   window.innerHeight / (window.innerHeight + el.offsetHeight)

  onMount(() => {
    // gsap.utils.toArray('section').forEach((section, i) => {
    //   console.log(section, i)
    // })

    gsap.set('.marquee__inner', { xPercent: -50 })

    gsap
      .to('.marquee__part', {
        xPercent: -100,
        repeat: -1,
        duration: 8,
        ease: 'linear',
      })
      .totalProgress(0.5)

    const tl = gsap.timeline({
      scrollTrigger: {
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: false,
        anticipatePin: 1,
      },
    })

    tl.to('#hero', {
      yPercent: 4,
      scale: 0.5,
      opacity: 0,
      ease: 'none',
    })

    tl.to('#backdrop', {
      yPercent: 200,
      ease: 'none',
    })
  })
</script>

<svelte:head>
  <title>Zakia Rowlett</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div>
  <div id="intro" class="flex w-full h-screen justify-center items-center">
    <section id="hero" class="absolute z-50">
      <Wordmark />
    </section>
    <section id="backdrop" class="z-[-1] fixed">
      <div
        id="hero-overlay"
        class="w-screen h-screen z-10 top-0 left-0 absolute"
      />
      <div class="halftone-wrapper w-full">
        <div class="halftone w-full flex justify-center items-center">
          <img
            id="backdrop-image"
            class="h-screen w-screen object-cover"
            alt="Zakia Rowlett"
            src={Image}
          />
        </div>
      </div>
    </section>
  </div>
  <section class="marquee">
    <div class="marquee__inner" aria-hidden="true" ref="inner">
      <div class="marquee__part">
        GRAPHIC DESIGNER &nbsp; &nbsp; ART DIRECTOR &nbsp; &nbsp; PRINT MAKER
        &nbsp; &nbsp; CUSTOM FABRICATION &nbsp; &nbsp;
      </div>
      <div class="marquee__part">
        GRAPHIC DESIGNER &nbsp; &nbsp; ART DIRECTOR &nbsp; &nbsp; PRINT MAKER
        &nbsp; &nbsp; CUSTOM FABRICATION &nbsp; &nbsp;
      </div>
      <div class="marquee__part">
        GRAPHIC DESIGNER &nbsp; &nbsp; ART DIRECTOR &nbsp; &nbsp; PRINT MAKER
        &nbsp; &nbsp; CUSTOM FABRICATION &nbsp; &nbsp;
      </div>
      <div class="marquee__part">
        GRAPHIC DESIGNER &nbsp; &nbsp; ART DIRECTOR &nbsp; &nbsp; PRINT MAKER
        &nbsp; &nbsp; CUSTOM FABRICATION &nbsp; &nbsp;
      </div>
      <div class="marquee__part">
        GRAPHIC DESIGNER &nbsp; &nbsp; ART DIRECTOR &nbsp; &nbsp; PRINT MAKER
        &nbsp; &nbsp; CUSTOM FABRICATION &nbsp; &nbsp;
      </div>
    </div>
  </section>
  <section class="bg-white z-50 w-full flex flex-col items-center pt-0">
    <Zoomer />
    <div class="bg-red-500 h-[300vh] w-full" />
    <div class="bg-blue-500 h-[300vh] w-full" />
  </section>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');

  .marquee__part {
    flex-shrink: 0;
    padding: 12px 0px;
    font-smooth: always;
    font-family: 'League Gothic', sans-serif;
  }

  .marquee {
    background: white;
    color: black;
    text-transform: uppercase;
    font-size: 4.667vw;
    position: relative;
    overflow: hidden;
  }

  .marquee__inner {
    -webkit-font-smoothing: antialiased;
    width: fit-content;
    display: flex;
    flex: auto;
    flex-direction: row;
  }

  #hero-overlay {
    animation: darken 24s forwards;
  }
  img {
    animation: animation-overlay 12s forwards;
  }
  .halftone-wrapper {
    background: white;
    mix-blend-mode: multiply;
    overflow: hidden;
  }
  .halftone {
    background: black;
    position: relative;
    filter: contrast(25000%);
    overflow: hidden;
    transform: translateZ(0);
  }

  .halftone > * {
    filter: brightness(0.5) blur(3px);
    animation: 14s animation-filter forwards cubic-bezier(0.65, 0, 0.35, 1);
  }

  .halftone::after {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    right: -100%;
    bottom: -100%;
    backdrop-filter: brightness(0.7);
    background-blend-mode: multiply;
    background: radial-gradient(10px 10px, cyan, white),
      radial-gradient(8px 8px, yellow, white),
      radial-gradient(8px 8px, magenta, white);
    background-size: 8px 8px;
    background-position: 0 -3px, -2px 0, 2px 0;
    mix-blend-mode: screen;
    pointer-events: none;
    transform: rotate(11.25deg);
    transition: 2s ease-in-out transform;
    z-index: 1;
    animation: 12s animation-overlay forwards ease-out;
  }

  @keyframes darken {
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: contrast(1);
    }
  }

  @keyframes image-enter {
    to {
      width: 100vw !important;
    }
  }

  @keyframes animation-overlay {
    0% {
      transform: rotate(45.25deg) scale(30);
      filter: brightness(0.2);
    }
    75% {
      filter: brightness(1);
    }
    100% {
      transform: rotate(0deg) scale(0.7);
      filter: contrast(1.2);
    }
  }

  @keyframes animation-filter {
    0% {
      filter: brightness(0) blur(500px);
    }
    100% {
      filter: brightness(0.7) blur(6px) contrast(1.1);
    }
  }
</style>
