<script>
  import Form from './Form.svelte';
  import screenshot from '$lib/images/pollencal-screenshot.png';
  import { Range, Label } from 'flowbite-svelte';
  import { t } from '$lib/translations';

  let minmaxValue = 4;
</script>

<svelte:head>
<title>Pollen Forecast Webcal</title>
</svelte:head>

<section class="container mx-auto py-4">
  <div class="px-4 pt-5 my-4 text-center border-b">
    <h1 class="text-5xl font-bold pb-2">{$t('common.title')}</h1>
    <div class="lg:w-2/3 mx-auto">
      <h2 class="text-xl font-light text-gray-700 pt-6 pb-8">{$t('common.intro')}</h2>
    </div>
    <div class="w-96 mx-auto mb-16">
      <Label>Emoji for Universal Pollen Index of {minmaxValue}</Label>
      <div class="relative mb-6">
        <Range id="range-minmax" min="0" max="5" bind:value={minmaxValue} class="w-full h-2 appearance-none cursor-pointer" />
        <span class="text-lg text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">😄</span>
        <span class="text-lg text-gray-500 dark:text-gray-400 absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6" style="inset-inline-start: 21%">🙂</span>
        <span class="text-lg text-gray-500 dark:text-gray-400 absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6" style="inset-inline-start: 40%">😐</span>
        <span class="text-lg text-gray-500 dark:text-gray-400 absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6" style="inset-inline-start: 60%">🙁</span>
        <span class="text-lg text-gray-500 dark:text-gray-400 absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6" style="inset-inline-start: 79%">🤧</span>
        <span class="text-lg text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">😵</span>
      </div>
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
