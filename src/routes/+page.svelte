<script>
  import Form from './Form.svelte';
  import Mockup from '$lib/Mockup.svelte';
  import { t } from '$lib/translations';
</script>

<svelte:head>
<title>Pollen Forecast Webcal</title>
</svelte:head>

<div class="container mx-auto max-w-7xl my-12 flex flex-col gap-10 items-start md:my-20 lg:flex-row">
  <div class="ml-0 md:ml-8 lg:w-full">
    <div class="lg:max-w-2xl">
      <h2 class="text-base font-semibold leading-7 text-primary-600">Emoji-first</h2>
      <h1 class="mt-2 text-3xl font-extrabold text-gray-900 sm:text-5xl">Pollen Forecast Webcal</h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">Get the pollen forecast for your location directly into your calendar. This webcal uses emojis to display a forecast of various pollen indexes for up to 5 days. Lookup your location and select your pollen index to get your individual calendar feed. Works with all calendars supporting online .ics and emojis, like Google Calendar, Apple Calendar, Outlook or others.</p>
      <div class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
        <a href="#setup" class="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Get started</a>
      </div>

      <Form />
    </div>
  </div>
  <div class="sticky mt-2 flex w-[400px] flex-col px-8 md:top-36 md:mt-0 lg:max-w-2xl">
    <Mockup />
  </div>
</div>

<style>
</style>
