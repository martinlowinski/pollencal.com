<script>
	import Form from './Form.svelte';
	import screenshot from '$lib/images/pollencal-screenshot.png';
	import { t } from '$lib/translations';
</script>

<svelte:head>
<title>Pollen Forecast Webcal</title>
</svelte:head>

<section class="container mx-auto py-4">
  <div class="px-4 pt-5 my-4 text-center border-b">
    <h1 class="text-5xl font-bold pb-2">{$t('common.title')}</h1>
    <div class="lg:w-2/3 mx-auto">
      <h2 class="text-xl font-light text-gray-700 pt-6 pb-12">{$t('common.intro')}</h2>
    </div>
    <div class="w-full lg:w-3/4 mx-auto overflow-hidden" style="max-height: 30vh;">
      <div class="px-5">
        <img src="{screenshot}" class="mx-auto" alt="Screenshot of subscribed calendar" loading="lazy">
      </div>
    </div>
  </div>

  <Form />
</section>

<style>
</style>
