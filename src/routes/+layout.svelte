<script>
import './styles.css';
import "../app.css";

import { onMount } from 'svelte';
import { page } from "$app/stores";
import posthog from 'posthog-js';
import Logo from '$lib/Logo.svelte';

let currentPath = '';

onMount(() => {
  if (typeof window !== 'undefined') {
    const unsubscribePage = page.subscribe(($page) => {
      if (currentPath && currentPath !== $page.url.pathname) {
        posthog.capture('$pageleave');
      }
      currentPath = $page.url.pathname;
      posthog.capture('$pageview');
    });

    const handleBeforeUnload = () => {
      posthog.capture('$pageleave');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      unsubscribePage();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }
});
</script>

<div class="app px-4">
  <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(43,142,67,0.13)_0,rgba(43,142,67,0)_50%,rgba(43,142,67,0)_100%)]"></div>

	<header>
	  <nav class="mx-auto flex max-w-7xl items-center justify-between py-6" aria-label="Global">
	    <div class="flex lg:flex-1">
	      <a href="/" class="-m-1.5 p-1.5">
		      <span class="sr-only">pollencal.com</span>
          <Logo class="h-8 w-auto hover:fill-primary-600" />
	      </a>
	    </div>
      <!--
	    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
	      <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
	    </div>
      -->
	  </nav>
	</header>

	<main>
    <section>
      <slot />
    </section>
	</main>

  <footer>
    <div class="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 py-6 md:h-24 md:flex-row">
      <div class="flex flex-col items-center gap-4 md:flex-row md:gap-2">
        <p class="text-muted-foreground text-sm leading-loose">Made with love by
          <a href="https://martinlowinski.de" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">Martin Lowinski</a>.
          Built using sveltekit and python flask. Buy me a <a href="https://buymeacoffee.com/martinlowinski" target="_blank" class="font-medium underline underline-offset-4">coffee</a>. Any <a href="#tally-open=nPYoOQ" class="underline underline-offset-4">feedback</a> is welcome.
        </p>
      </div>
    </div>
  </footer>
</div>

<style>
</style>
