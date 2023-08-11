<script setup>
  import { onMount } from 'svelte'

  let state = {
    xChild: 0,
    yChild: 0,
    xParent: 0,
    yParent: 0,
    hover: false,
    hideCursor: true,
  }

  function cursorCircle() {
    // prettier-ignore
    return `transform: translateX(${state.xParent}px) translateY(${state.yParent}px) translateZ(0) translate3d(0, 0, 0)`
  }

  function cursorPoint() {
    // prettier-ignore
    return `transform: translateX(${state.xChild - 3}px) translateY(${state.yChild - 3}px) translateZ(0) translate3d(0, 0, 0)`
  }

  function moveCursor(e) {
    state.cursorCirlce = cursorCircle()
    state.cursorPoint = cursorPoint()
    state.xChild = e.clientX
    state.yChild = e.clientY
    setTimeout(() => {
      state.xParent = e.clientX - 20
      state.yParent = e.clientY - 20
    }, 100)
  }

  onMount(() => {
    document.addEventListener('mouseover', e => {
      // @ts-ignore
      if (e.target.classList.contains('hoverable')) state.hover = true
      else state.hover = false
    })
    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseleave', e => {
      state.hideCursor = true
    })
    document.addEventListener('mouseenter', e => {
      state.hideCursor = false
    })
  })
</script>

<div
  class={`g-cursor ${
    state.hover ? 'g-cursor_hover' : state.hideCursor ? 'g-cursor_hide' : ''
  }`}
>
  <!-- <div style={state.cursorCircle} class="g-cursor__circle" /> -->
  <div class="g-cursor__point" style={state.cursorPoint} />
</div>

<style>
  .g-cursor {
    position: absolute;
  }

  .g-cursor_hide {
    opacity: 0;
    width: 60px;
    height: 60px;
    transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  }

  .g-cursor__circle {
    pointer-events: none;
    user-select: none;
    top: 2px;
    left: 2px;
    position: fixed;
    width: 48px;
    height: 48px;
    background: black;
    mix-blend-mode: difference;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: margin 0.6s ease, opacity 0.6s ease, width 0.6s ease,
      height 0.6s ease;
  }

  .g-cursor__point {
    top: 0;
    left: 0;
    position: fixed;
    width: 24px;
    height: 24px;
    margin-left: -8px;
    margin-top: -8px;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    background: #00000000;
    z-index: 55555555;
    backdrop-filter: invert(1);
    will-change: transform;
    transition: margin 0.4s ease, opacity 0.4s ease, width 0.4s ease,
      height 0.4s ease;
  }

  .g-cursor_hover .g-cursor__point {
    width: 80px;
    height: 80px;
    margin-left: -40px;
    margin-top: -40px;
    background: black;
    mix-blend-mode: difference;
    transition: margin 0.4s ease, width 0.4s ease, height 0.4s ease,
      opacity 0.4s ease, transform 0s;
  }

  .g-cursor_hover .g-cursor__circle {
    opacity: 1;
    width: 74px;
    height: 74px;
    margin-left: -22px;
    margin-top: -22px;
    background: rgba(255, 255, 255, 1);
    border-color: transparent;
    transition: margin 0.4s ease, width 0.4s ease, height 0.4s ease,
      opacity 0.4s ease;
  }
</style>
