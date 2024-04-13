<script>
  import { onMount } from 'svelte'
  import { scroll } from '../store'

  import Profile from '$lib/images/profile.png'

  import zakia from '$lib/images/zakia.svg'

  import icon1 from '$lib/images/icons/icon1.png'
  import icon2 from '$lib/images/icons/icon2.png'
  import icon3 from '$lib/images/icons/icon3.png'

  import contact from '$lib/images/svgs/contact.svg'
  import logo from '$lib/images/svgs/logo.svg'
  import subscribe from '$lib/images/svgs/subscribe.svg'
  import resume from '$lib/images/svgs/resume.svg'

  let parallax
  let scrollHeight

  $: parallax = (offsetTop = 0, speed = 0.5) => {
    return `background-position: 0px ${($scroll.value - offsetTop) * speed}px;`
  }

  onMount(() => {
    scrollHeight = document.getElementById('profile').scrollHeight
  })
</script>

<svelte:head>
  <title>Zakia Rowlett | About</title>
  <meta name="description" content="About Zakia" />
</svelte:head>

<div class="noisy h-full fixed top-0 left-0" />
<section id="profile" class="w-full h-[300vh]">
  <div
    class="w-full h-full bg-cover"
    style={`background-image: url(${Profile}); ${parallax(1200)}`}
  >
    <div
      class="overflow-hidden absolute w-full"
      style="height: {scrollHeight}px"
    >
      <div class="content">
        <div class="w-full h-[75vh]"></div>
        <div class="flex w-full justify-between items-center px-12">
          <p class="kameron text-white text-lg mt-[-42px]">
            Original Image by: Jordy
            <br />
            <a
              class="hoverable text-white font-bold hover:underline"
              href="https://www.instagram.com/p/Cw522GZPXB2/?img_index=1"
            >
              @jordy.png
            </a>
          </p>
          <img src={zakia} alt="zakia" class="z-[99]" />
        </div>
        <div
          class="bg-[#000000bb] w-full min-h-[300vh] mt-[-75px] p-40 text-white montserrat text-lg flex flex-col gap-0"
          style="backdrop-filter: blur(64px);"
        >
          <div class="bg-transparent">
            <div class="w-full flex gap-12 justify-between p-12 items-center">
              <div
                class=" h-[200px] w-[200px] flex justify-center items-center"
              >
                <img src={icon1} alt="icon1" class="min-w-[200px]" />
              </div>
              <div class="w-full h-full">
                <p class="text-xl">
                  Zakia practices artistry within the mediums of Art Direction,
                  Print making, and Custom Fabrication.
                </p>
              </div>
            </div>
            <div class="w-full flex gap-12 justify-between p-12 items-center">
              <div
                class=" h-[200px] w-[200px] flex justify-center items-center"
              >
                <img src={icon2} alt="icon2" class="min-w-[200px]" />
              </div>
              <div class="w-full h-full">
                <p class="text-xl">
                  With 7 years of experience in the creative industry, Zakia has
                  honed skills in crafting compelling visuals that bring
                  narratives alive through print, digital, and multimedia
                  advertising materials such as social media campaigns, brand
                  identity, packaging, activation & environmental design
                  production.
                </p>
              </div>
            </div>
            <div class="w-full flex gap-12 justify-between p-12 items-center">
              <div
                class=" h-[200px] w-[200px] flex justify-center items-center"
              >
                <img src={icon3} alt="icon3" class="min-w-[200px]" />
              </div>
              <div class="w-full h-full">
                <p class="text-xl">
                  Growing up a “crafty” kid making things like mosaic table tops
                  - she currently works to continue incorporating custom
                  fabrication into her works by producing fabricated pieces
                  featuring wood/painting/and or glass and other material. Zakia
                  strives to maintain her desired balance within digital and 3D
                  realms.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-transparent mt-64 w-full">
            <div class="flex gap-2 w-full">
              <div class="bg-orange-500 w-full">contact</div>
              <div class="h-[200px] w-[200px] bg-red-500">
                <img src={logo} alt="logo" />
              </div>
              <div class="bg-green-500 w-full">subscribe</div>
              <div class="bg-yellow-500 w-full">resume</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  #zakia {
    transform: translateX(-94px);
  }
</style>
