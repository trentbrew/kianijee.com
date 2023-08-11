<script>
  import { onMount } from 'svelte'
  import gsap from 'gsap'
  import { scrollData } from '../../routes/store.js'

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

<div
  id="menu-toggle"
  class="bg-white/{open
    ? '10'
    : '80'} fixed backdrop-invert backdrop-blur-[12px] rounded-full h-12 w-12 top-8 right-8 z-[101] cursor-pointer hover:scale-[1.4] duration-300 opacity-0 flex justify-center items-center"
  on:click={toggleMenu}
  on:keydown={handleKeydown}
>
  {#if open}
    <svg
      class={open && 'invert'}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4099 11.9999L19.7099 5.70994C19.8982 5.52164 20.004 5.26624 20.004 4.99994C20.004 4.73364 19.8982 4.47825 19.7099 4.28994C19.5216 4.10164 19.2662 3.99585 18.9999 3.99585C18.7336 3.99585 18.4782 4.10164 18.2899 4.28994L11.9999 10.5899L5.70994 4.28994C5.52164 4.10164 5.26624 3.99585 4.99994 3.99585C4.73364 3.99585 4.47824 4.10164 4.28994 4.28994C4.10164 4.47825 3.99585 4.73364 3.99585 4.99994C3.99585 5.26624 4.10164 5.52164 4.28994 5.70994L10.5899 11.9999L4.28994 18.2899C4.19621 18.3829 4.12182 18.4935 4.07105 18.6154C4.02028 18.7372 3.99414 18.8679 3.99414 18.9999C3.99414 19.132 4.02028 19.2627 4.07105 19.3845C4.12182 19.5064 4.19621 19.617 4.28994 19.7099C4.3829 19.8037 4.4935 19.8781 4.61536 19.9288C4.73722 19.9796 4.86793 20.0057 4.99994 20.0057C5.13195 20.0057 5.26266 19.9796 5.38452 19.9288C5.50638 19.8781 5.61698 19.8037 5.70994 19.7099L11.9999 13.4099L18.2899 19.7099C18.3829 19.8037 18.4935 19.8781 18.6154 19.9288C18.7372 19.9796 18.8679 20.0057 18.9999 20.0057C19.132 20.0057 19.2627 19.9796 19.3845 19.9288C19.5064 19.8781 19.617 19.8037 19.7099 19.7099C19.8037 19.617 19.8781 19.5064 19.9288 19.3845C19.9796 19.2627 20.0057 19.132 20.0057 18.9999C20.0057 18.8679 19.9796 18.7372 19.9288 18.6154C19.8781 18.4935 19.8037 18.3829 19.7099 18.2899L13.4099 11.9999Z"
        fill="currentColor"
      />
    </svg>
  {:else}
    <svg
      class={open && 'invert'}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8V8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
        fill="currentColor"
      />
    </svg>
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
            class="menu-item {`menu-item-${i}`} text-2xl font-bold text-black hover:underline cursor-pointer opacity-0"
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
