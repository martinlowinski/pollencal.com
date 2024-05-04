<script>
import './styles.css';
import "../app.css";

import { onMount } from 'svelte';
import { page } from "$app/stores";
import posthog from 'posthog-js'

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
	<main>
		<slot />
	</main>
</div>

<style>
</style>
