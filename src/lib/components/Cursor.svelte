<script setup>
  import { onMount } from 'svelte'

  let state = {
    xChild: 0,
    yChild: 0,
    xParent: 0,
    yParent: 0,
    hover: false,
    hideCursor: true,
    hint: null,
    mousedown: false,
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
      const target = e.target
      // @ts-ignore
      if (target.dataset.hoverHint) state.hint = target.dataset.hoverHint
      else state.hint = null
      // @ts-ignore
      if (target.classList.contains('hoverable')) state.hover = true
      else state.hover = false
    })
    document.addEventListener('mouseleave', e => {
      state.hideCursor = true
      state.hint = null
    })
    document.addEventListener('mouseenter', e => {
      state.hideCursor = false
    })
    document.addEventListener('mousedown', e => {
      state.mousedown = true
    })
    document.addEventListener('mouseup', e => {
      state.mousedown = false
    })
    document.addEventListener('mousemove', moveCursor)
  })
</script>

<div
  class={`g-cursor ${
    state.hover
      ? `g-cursor_hover ${state.mousedown ? 'g-cursor_click_hover' : ''}`
      : state.hint
      ? `g-cursor_hint ${state.mousedown ? 'g-cursor_click_hint' : ''}`
      : state.hideCursor
      ? `g-cursor_hide`
      : `${state.mousedown ? 'g-cursor_click' : ''}`
  }`}
>
  <div
    class="g-cursor__point flex justify-center items-center"
    style={state.cursorPoint}
  >
    {#if state.hint}
      o hai
    {/if}
  </div>
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

  .g-cursor__point {
    top: 0;
    left: 0;
    position: fixed;
    width: 36px;
    height: 36px;
    margin-left: -18px;
    margin-top: -18px;
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

  .g-cursor_click .g-cursor__point {
    width: 24px;
    height: 24px;
    margin-left: -12px;
    margin-top: -12px;
    transition: 0.2s;
  }

  .g-cursor_hover .g-cursor__point {
    width: 80px;
    height: 80px;
    margin-left: -40px;
    margin-top: -40px;
    transition: margin 0.4s ease, width 0.4s ease, height 0.4s ease,
      opacity 0.4s ease, transform 0s;
  }

  .g-cursor_click_hover .g-cursor__point {
    width: 64px;
    height: 64px;
    margin-left: -32px;
    margin-top: -32px;
    transition: 0.2s;
  }

  .g-cursor_hint .g-cursor__point {
    width: 300px;
    height: 300px;
    margin-left: -150px;
    margin-top: -150px;
    backdrop-filter: invert(1);
    transition: margin 0.4s ease, width 0.4s ease, height 0.4s ease,
      opacity 0.4s ease, transform 0s;
  }

  .g-cursor_click_hint .g-cursor__point {
    width: 280px;
    height: 280px;
    margin-left: -140px;
    margin-top: -140px;
    transition: 0.2s;
  }
</style>
