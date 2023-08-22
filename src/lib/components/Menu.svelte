<script>
  import { onMount } from 'svelte'
  import gsap from 'gsap'
  import { scroll } from '../../routes/store.js'
  import Icon from '$lib/components/Icon.svelte'

  const items = [
    { name: 'Home', link: '#_home' },
    { name: 'Work', link: '#_work' },
    { name: 'About', link: '#_about' },
    { name: 'Shop', link: '#_shop' },
    { name: 'Contact', link: '#_contact' },
  ]

  let open = false
  let mounted = false

  $: {
    if (mounted) {
      if (window.location.pathname === '/') {
        if ($scroll.value > 0) {
          gsap.to('#menu-toggle', {
            duration: 0.4,
            css: {
              scale: 1,
              opacity: 1,
              background: '#dddddd',
            },
          })
        } else {
          gsap.to('#menu-toggle', {
            duration: 0.4,
            css: {
              scale: 1,
              opacity: 1,
              background: '#dddddd00',
            },
          })
        }
      } else {
        gsap.to('#menu-toggle', {
          duration: 0,
          css: {
            scale: 1,
            opacity: 1,
            background: '#000000',
          },
        })
      }
    }
  }

  onMount(() => {
    mounted = true
    if (window.location.pathname == '/') {
      setTimeout(() => {
        gsap.to('#menu-toggle', {
          css: {
            scale: 1,
            opacity: 1,
            background: '#00000000',
          },
        })
      }, 12000)
    } else {
      gsap.to('#menu-toggle', {
        css: {
          scale: 1,
          opacity: 1,
          background: '#000000',
        },
      })
    }
  })

  function openMenu() {
    open = true
    gsap.to('#menu-backdrop', {
      duration: 0.6,
      css: {
        scale: 30,
      },
    })
    setTimeout(() => {
      items.forEach((item, i) => animateItem(i, true))
    }, 100)
  }

  function closeMenu() {
    gsap.to('#menu-backdrop', {
      duration: 0.6,
      delay: 0.2,
      css: {
        scale: 1,
      },
    })
    items.forEach((item, i) => animateItem(i, false))
    setTimeout(() => {
      open = false
    }, 100)
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
    gsap.fromTo(
      `.menu-item-text-${index}`,
      {
        duration: 0.6,
        delay: enter ? (index ? 0.12 * index : 0) : 0.15,
        left: enter ? '5%' : '0%',
      },
      {
        duration: 0.6,
        delay: enter ? (index ? 0.12 * index : 0) : 0.15,
        left: enter ? '0%' : '5%',
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
  class="hoverable bg-black fixed rounded-full h-12 w-12 top-8 right-8 z-[101] cursor-pointer hover:scale-[1.4] opacity-0 flex justify-center items-center"
  on:click={toggleMenu}
  on:keydown={handleKeydown}
>
  <div class="pointer-events-none mix-blend-difference">
    {#if open}
      <Icon color="white" name="close" />
    {:else}
      <Icon color="white" name="menu" />
    {/if}
  </div>
</div>
<div
  id="menu-backdrop"
  class="fixed rounded-full h-12 w-12 top-8 right-8 z-[99] duration-300"
/>
<div
  class="fixed top-0 left-0 w-full h-screen backdrop-blur-[64px] backdrop-brightness-[0.4] duration-[400ms] z-[100] {open
    ? 'opacity-1'
    : 'opacity-0 pointer-events-none'}"
/>
{#if open}
  <div
    id="menu-items"
    class="fixed w-screen h-screen top-0 left flex justify-end items-center pr-8 pb-8 z-[100] text-right"
  >
    <ul>
      {#each items as item, i}
        <li class="ease-in-out">
          <a
            href={item.link}
            class="menu-item {`menu-item-${i}`} text-2xl font-bold text-white duration-300 cursor-pointer opacity-0"
            on:click={handleAnchorClick}
          >
            <span class="absolute w-full left-0 pr-0 {`menu-item-text-${i}`}">
              <span class="hoverable hover:opacity-50">
                {item.name}
              </span>
            </span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  a {
    font-family: 'League Gothic', sans-serif;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    font-size: 4.5rem;
    line-height: 1.2;
    font-weight: 200;
    margin-right: 32px;
  }
</style>
