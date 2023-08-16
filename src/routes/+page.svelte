<script>
  import { onMount } from 'svelte'
  import { scroll } from './store.js'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  import Menu from '$lib/components/Menu.svelte'
  import Hero from '$lib/images/landing.gif'
  import Profile from '$lib/images/profile.png'
  import Wordmark from '$lib/components/Wordmark.svelte'
  import Zoomer from '$lib/components/Zoomer.svelte'
  import Tracks from '$lib/components/Tracks.svelte'

  gsap.registerPlugin(ScrollTrigger)

  let parallax

  $: parallax = `background-position: 0px ${$scroll.value * 0.5}px;`

  onMount(() => {
    gsap.set('.marquee__inner', { xPercent: -50 }),
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
        scrub: 0.5,
        pin: false,
        anticipatePin: 1,
      },
    })
    tl.to('#hero', {
      yPercent: 10,
      scale: 0.2,
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
  <Menu />
  <section id="_home" class="flex w-full h-screen justify-center items-center">
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
            src={Hero}
          />
        </div>
      </div>
    </section>
  </section>
  <section id="marquee" class="marquee">
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
  <section id="_work" class="bg-white w-full h-[300vh]" />
  <!-- <section class="bg-white z-50 w-full flex flex-col items-center pt-36">
    <div class="w-full z-[2] pointer-events-none">
      <Zoomer />
    </div>
    <div class="h-[230vh] w-full bg-white z-[1]" />
    <section id="_work" class="w-full z-[1] bg-white">
      <Tracks />
    </section>
    <section id="_about" class="w-full h-[300vh]">
      <div
        id="profile"
        class="w-full h-full flex justify-center items-center bg-cover"
        style={`background-image: url(${Profile}); ${parallax}`}
      >
        <div class="absolute w-full h-[300vh]">
          <div class="noisy" />
        </div>
        <div class="content"></div>
      </div>
    </section>
    <section class="w-full h-full flex justify-center items-center p-12">
      <div class="bg-gray-300 w-full aspect-video" />
    </section>
  </section> -->
</div>

<style>
  #profile {
    will-change: background-position;
    font-family: 'Kameron', serif;
  }
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
    font-size: 3vw;
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

  #hero-overlay {
    animation: darken 21s forwards;
  }

  @keyframes darken {
    0% {
      background: rgba(0, 0, 0, 0);
      opacity: 0;
    }
    100% {
      background: rgba(0, 0, 0, 0.6);
      opacity: 1;
      backdrop-filter: contrast(2) hue-rotate(0deg) saturate(2);
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
