<script>
  import { onMount } from 'svelte'
  import gsap from 'gsap'

  const items = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#_about' },
    { name: 'Work', link: '#_work' },
    { name: 'Contact', link: '#_contact' },
  ]

  let open = false

  function openMenu() {
    open = true
    gsap.to('#menu-backdrop', {
      duration: 0.6,
      css: {
        scale: 75,
      },
    })
    setTimeout(() => {
      items.forEach((item, i) => animateItem(i, true))
    }, 600)
  }

  function closeMenu() {
    gsap.to('#menu-backdrop', {
      duration: 0.6,
      delay: 1,
      css: {
        scale: 1.2,
      },
    })
    items.forEach((item, i) => animateItem(i, false))
    setTimeout(() => {
      open = false
    }, 1600)
  }

  function toggleMenu() {
    if (open) closeMenu()
    else openMenu()
  }

  function animateItem(index, enter) {
    gsap.to(`.menu-item-${index}`, {
      duration: 0.6,
      delay: index ? 0.15 * index : 0,
      css: {
        // opacity: enter ? 1 : 0,
        marginLeft: enter ? 0 : -500,
      },
    })
  }
</script>

<div
  id="menu-toggle"
  class="bg-white/10 fixed backdrop-invert backdrop-blur-[12px] rounded-full h-12 w-12 top-8 right-8 z-[101] cursor-pointer hover:scale-[1.4] duration-300"
  on:click={toggleMenu}
/>
<div
  id="menu-backdrop"
  class="fixed rounded-full h-12 w-12 top-8 right-8 z-[99] duration-300 {open
    ? 'backdrop-invert backdrop-brightness-[0.2]'
    : ''}"
  style="transition-timing-function: cubic-bezier(0, 0.55, 0.45, 1);"
/>
<!-- {#if open} -->
<div
  id="menu-items"
  class="fixed w-screen h-screen top-0 left flex justify-start items-center pl-32 z-[100]"
>
  <ul>
    {#each items as item, i}
      <li class="menu-item ease-in-out">
        <a
          href={item.link}
          class="{`menu-item-${i}`} text-2xl font-bold text-black hover:underline cursor-pointer ml-[-500px]"
          on:click|preventDefault={closeMenu}
        >
          {item.name}
        </a>
      </li>
    {/each}
  </ul>
</div>

<!-- {/if} -->

<style>
  a {
    font-family: 'League Gothic', sans-serif;
    font-size: 10rem;
    line-height: 1.2;
    font-weight: 400;
  }
</style>
