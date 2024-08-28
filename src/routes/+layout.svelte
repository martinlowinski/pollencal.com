<script>
import './styles.css';
import "../app.css";

import { onMount } from 'svelte';
import { page } from "$app/stores";
import posthog from 'posthog-js';
import logo from '$lib/images/logo.svg';

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

<div class="app">
	<header class="bg-white">
	  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
	    <div class="flex lg:flex-1">
	      <a href="#" class="-m-1.5 p-1.5">
		<span class="sr-only">pollencal.com</span>
		<img class="h-8 w-auto" src={logo} alt="pollencal.com logo" />
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
		<slot />
	</main>
</div>

<style>
</style>
