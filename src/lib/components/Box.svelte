<script>
  import gsap from 'gsap'

  export let color

  let visible = true
  const duration = 1

  // 🟡 ENTER ANIMATION: This function handles the animation for when the box APPEARS

  function tweenIn(node) {
    let tl = gsap.timeline()

    tl.from(node, {
      duration,
      opacity: 0,
    }).from(
      '.box',
      {
        duration,
        xPercent: 100,
        rotation: -90,
        yPercent: 100,
        ease: 'bounce.out',
      },
      `-=${duration * 0.75}`
    ) // animate slightly faster

    return {
      duration: duration * 1000,
      tick: t => {
        tl.progress(t)
      },
    }
  }

  // 🟡 EXIT ANIMATION: This function handles the animation for when the box DISAPPEARS

  function tweenOut(node) {
    let tl = gsap.timeline()

    tl.to(node, {
      duration,
      yPercent: 100,
      ease: 'back.in',
    }).to(
      '.box',
      {
        duration: duration * 0.25,
        opacity: 0,
      },
      `-=${duration * 0.25}`
    ) // animate much faster

    return {
      duration: duration * 1000,
      tick: (t, u) => {
        tl.progress(u)
      },
    }
  }
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
</label>

{#if visible}
  <div
    class="box hover:!bg-black cursor-pointer"
    style={`background: ${color}`}
    in:tweenIn
    out:tweenOut
  />
{/if}

<style>
  .box {
    width: 100px;
    height: 100px;
  }
</style>
