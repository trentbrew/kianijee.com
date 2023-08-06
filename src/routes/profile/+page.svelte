<script>
  import Image from '$lib/images/landing.gif'
  import { onMount } from 'svelte'
  import Wordmark from '../Wordmark.svelte'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  // PARALLAX: #hero section should scroll at half the speed of the pag

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#backdrop',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    })

    tl.to('#hero', {
      yPercent: -75,
      ease: 'none',
    })
  })
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="flex w-full h-screen justify-center items-center">
  <section id="hero" class="absolute z-50">
    <Wordmark />
  </section>
  <section id="backdrop">
    <div
      id="hero-overlay"
      class="w-screen h-screen top-0 left-0 z-10 absolute"
    />
    <div class="halftone-wrapper w-full">
      <div class="halftone w-full flex justify-center items-center">
        <img
          class="h-screen w-screen object-cover"
          alt="Zakia Rowlett"
          src={Image}
        />
      </div>
    </div>
  </section>
</div>
<section class="h-[200vh] w-full" />

<style>
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
