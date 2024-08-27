<script>
  import Form from './Form.svelte';
  import Mockup from '$lib/Mockup.svelte';
  import screenshot from '$lib/images/pollencal-screenshot.png';
  import { Range, Label } from 'flowbite-svelte';
  import { t } from '$lib/translations';

  let minmaxValue = 4;
</script>

<svelte:head>
<title>Pollen Forecast Webcal</title>
</svelte:head>

<section class="container mx-auto py-4">
  <div class="overflow-hidden bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-primary-600">Emoji-first</h2>
            <h1 class="mt-2 text-3xl font-extrabold text-gray-900 sm:text-5xl">Pollen Forecast Webcal</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">Get the pollen forecast for your location directly into your calendar. This webcal uses emojis to display a forecast of various pollen indexes for up to 5 days. Lookup your location and select your pollen index to get your individual calendar feed. Works with all calendars supporting online .ics and emojis, like Google Calendar, Apple Calendar, Outlook or others.</p>
            <div class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <a href="#" class="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Get started</a>
            </div>
          </div>
        </div>
        <Mockup />
      </div>
    </div>
  </div>

  <Form />
</section>

<style>
</style>
