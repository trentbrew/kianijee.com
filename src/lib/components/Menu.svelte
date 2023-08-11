<script>
  import { onMount } from 'svelte'
  import gsap from 'gsap'
  import { scrollData } from '../../routes/store.js'
  import Icon from '$lib/components/Icon.svelte'

  const items = [
    { name: 'Home', link: '#_home' },
    { name: 'Work', link: '#_work' },
    { name: 'About', link: '#_about' },
    { name: 'Shop', link: '#_shop' },
    { name: 'Contact', link: '#_contact' },
  ]

  let open = false
  let scroll = 0

  $: scroll = $scrollData.scroll

  $: {
    if (scroll > 0) {
      gsap.to('#menu-toggle', {
        css: {
          scale: 1,
          opacity: 1,
        },
      })
    }
  }

  onMount(() => {
    setTimeout(() => {
      gsap.to('#menu-toggle', {
        css: {
          scale: 1,
          opacity: 1,
        },
      })
    }, 18000)
  })

  function openMenu() {
    open = true
    gsap.to('#menu-backdrop', {
      duration: 0.6,
      css: {
        scale: 80,
      },
    })
    setTimeout(() => {
      items.forEach((item, i) => animateItem(i, true))
    }, 200)
  }

  function closeMenu() {
    gsap.to('#menu-backdrop', {
      duration: 0.6,
      delay: 0.2,
      css: {
        scale: 1.2,
      },
    })
    items.forEach((item, i) => animateItem(i, false))
    setTimeout(() => {
      open = false
    }, 800)
  }

  function toggleMenu() {
    if (open) closeMenu()
    else openMenu()
  }

  function handleAnchorClick(event) {
    closeMenu()
    event.preventDefault()
    const link = event.currentTarget
    const anchorId = new URL(link.href).hash.replace('#', '')
    const anchor = document.getElementById(anchorId)
    setTimeout(() => {
      window.scrollTo({
        top: anchor.offsetTop,
        behavior: 'smooth',
      })
    }, 600)
  }

  function animateItem(index, enter) {
    gsap.fromTo(
      `.menu-item-${index}`,
      {
        duration: 0.6,
        delay: enter ? (index ? 0.12 * index : 0) : 0.15,
        css: {
          opacity: enter ? 0 : 1,
        },
      },
      {
        duration: 0.6,
        delay: enter ? (index ? 0.12 * index : 0) : 0.15,
        css: {
          opacity: enter ? 1 : 0,
        },
      }
    )
  }

  function handleKeydown(e) {
    if (e.key === 'Enter') toggleMenu()
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  id="menu-toggle"
  class="bg-white/{open
    ? '10'
    : '80'} hoverable fixed backdrop-invert backdrop-blur-[12px] rounded-full h-12 w-12 top-8 right-8 z-[101] cursor-pointer hover:scale-[1.4] duration-300 opacity-0 flex justify-center items-center"
  on:click={toggleMenu}
  on:keydown={handleKeydown}
>
  {#if open}
    <div class={`pointer-events-none ${open ? 'invert' : ''}`}>
      <Icon name="close" />
    </div>
  {:else}
    <div class={`pointer-events-none ${open ? 'invert' : ''}`}>
      <Icon name="menu" />
    </div>
  {/if}
</div>
<div
  id="menu-backdrop"
  class="fixed rounded-full h-12 w-12 top-8 right-8 z-[99] duration-300 {open
    ? 'bg-white/80 backdrop-invert'
    : ''}"
  style="transition-timing-function: cubic-bezier(0, 0.55, 0.45, 1);"
/>
{#if open}
  <div
    id="menu-items"
    class="fixed w-screen h-screen top-0 left flex justify-end items-end pr-8 pb-8 z-[100] text-right"
  >
    <ul>
      {#each items as item, i}
        <li class="ease-in-out">
          <a
            href={item.link}
            class="hoverable menu-item {`menu-item-${i}`} text-2xl font-bold text-black hover:underline cursor-pointer opacity-0"
            on:click={handleAnchorClick}
          >
            {item.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  a {
    font-family: 'League Gothic', sans-serif;
    font-size: 6rem;
    line-height: 1.2;
    font-weight: 400;
  }
</style>
