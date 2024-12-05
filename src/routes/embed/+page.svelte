<script>
  import { onMount } from 'svelte'
  import { scroll } from '../store.js'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  import Hero from '$lib/images/landing_compressed.gif'
  import Wordmark from '$lib/components/Wordmark.svelte'
  import Marquee from '$lib/components/Marquee.svelte'
  import Footer from '$lib/components/Footer.svelte'

  gsap.registerPlugin(ScrollTrigger)

  let parallax

  $: parallax = (offsetTop = 0, speed = 0.5) => {
    return `background-position: 0px ${($scroll.value - offsetTop) * speed}px;`
  }

  onMount(() => {
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
      scale: 0.5,
      ease: 'none',
    })
    tl.to('#backdrop', {
      yPercent: 200,
      ease: 'none',
    })
  })
</script>

<svelte:head>
  <title>Zakia Rowlett | Home</title>
  <meta name="description" content="Zakia Rowlett" />
</svelte:head>

<div class="">
  <section id="_home" class="flex w-full h-screen justify-center items-center">
    <section
      id="hero"
      class="absolute z-50 pointer-events-none flex justify-center items-center mt-[-10vh]"
    >
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
</div>

<style>
  #profile {
    will-change: background-position;
    font-family: 'Kameron', serif;
  }

  img {
    animation: animation-overlay 8s forwards;
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
    animation: 6s animation-filter forwards cubic-bezier(0.65, 0, 0.35, 1);
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
    background-position:
      0 -3px,
      -2px 0,
      2px 0;
    mix-blend-mode: screen;
    pointer-events: none;
    transform: rotate(11.25deg);
    transition: 2s ease-in-out transform;
    animation: 6s animation-overlay forwards ease-out;
    z-index: 1;
  }

  #hero-overlay {
    /* darken 21s forwards */
    animation: darken 12s forwards;
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
