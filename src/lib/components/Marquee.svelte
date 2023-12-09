<script>
  import { onMount } from 'svelte'
  import gsap from 'gsap'

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
  })
</script>

<!-- ART DIRECTOR / MULTIDISCIPLINARY ARTIST / FABRICATION -->

<div id="marquee" class="marquee">
  <div class="marquee__inner" aria-hidden="true" ref="inner">
    <div class="marquee__part">
      ART DIRECTOR &nbsp; &nbsp; MULTIDISCIPLINARY ARTIST &nbsp; &nbsp;
      FABRICATION &nbsp; &nbsp; CUSTOM FABRICATION &nbsp; &nbsp;
    </div>
    <div class="marquee__part">
      ART DIRECTOR &nbsp; &nbsp; MULTIDISCIPLINARY ARTIST &nbsp; &nbsp;
      FABRICATION &nbsp; &nbsp; CUSTOM FABRICATION &nbsp; &nbsp;
    </div>
    <div class="marquee__part">
      ART DIRECTOR &nbsp; &nbsp; MULTIDISCIPLINARY ARTIST &nbsp; &nbsp;
      FABRICATION &nbsp; &nbsp; CUSTOM FABRICATION &nbsp; &nbsp;
    </div>
    <div class="marquee__part">
      ART DIRECTOR &nbsp; &nbsp; MULTIDISCIPLINARY ARTIST &nbsp; &nbsp;
      FABRICATION &nbsp; &nbsp; CUSTOM FABRICATION &nbsp; &nbsp;
    </div>
    <div class="marquee__part">
      ART DIRECTOR &nbsp; &nbsp; MULTIDISCIPLINARY ARTIST &nbsp; &nbsp;
      FABRICATION &nbsp; &nbsp; CUSTOM FABRICATION &nbsp; &nbsp;
    </div>
  </div>
</div>

<style>
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
    z-index: 1;
  }

  .marquee__inner {
    -webkit-font-smoothing: antialiased;
    width: fit-content;
    display: flex;
    flex: auto;
    flex-direction: row;
  }
</style>
