<script>
  import { page } from '$app/stores'
  import logo from '$lib/images/svelte-logo.svg'
  import github from '$lib/images/github.svg'
</script>

<header>
  <nav class="fixed top-0 left-0 z-10">
    <ul class="flex justify-center items-center gap-6 p-8">
      <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === '/profile' ? 'page' : undefined}>
        <a href="/profile">Profile</a>
      </li>
      <li aria-current={$page.url.pathname === '/work1' ? 'page' : undefined}>
        <a href="/work1">work1</a>
      </li>
      <li aria-current={$page.url.pathname === '/work2' ? 'page' : undefined}>
        <a href="/work2">work2</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  a:hover {
    text-decoration: underline;
  }
</style>
