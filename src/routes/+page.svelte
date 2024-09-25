<script>
  import Form from './Form.svelte';
  import Mockup from '$lib/Mockup.svelte';
  import { t } from '$lib/translations';
</script>

<svelte:head>
<title>Pollen Forecast Webcal</title>
</svelte:head>

<div class="container mx-auto max-w-7xl my-20 flex flex-col gap-10 items-start md:my-20 md:flex-row">
  <div class="lg:w-full">
    <div class="lg:max-w-2xl">
      <h2 class="text-base font-semibold leading-7 text-primary-600">Emoji-first</h2>
      <h1 class="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl md:sm:text-4xl lg:text-5xl">Pollen Forecast Webcal</h1>
      <p class="mt-6 text-lg leading-8 text-gray-700">Get the pollen forecast for your location directly into your calendar. This webcal uses emojis to display a forecast of various pollen indexes for up to 5 days. Lookup your location and select your pollen index to get your individual calendar feed. Works with all calendars supporting online .ics and emojis, like Google Calendar, Apple Calendar, Outlook or others.</p>
      <div class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
        <a href="#setup" class="rounded-md bg-primary-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Get started</a>
      </div>

      <div class="mt-24 flex items-center justify-center md:hidden">
        <Mockup />
      </div>

      <Form />

      <div class="py-16">
        <h2 class="mt-2 text-3xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">Why?</h2>
        <p class="mt-6 text-lg leading-8 text-gray-700">Pollen counts have increased by 96.3% worldwide since 1998. A dramatic increase in pollen in the air has been recorded in 17 locations in the northern hemisphere. 30% of the world's population suffer from allergic rhinitis (aka hay fever). Unfortunately, the pollen count is highly seasonal, species- and weather-dependent and depends on many local factors. Numerous websites and apps from weather portals or pharmaceutical companies try to take this dynamic into account with current pollen count data and forecasts.</p>
        <p class="mt-6 text-lg leading-8 text-gray-700">In my daily routine, however, I don't want to have to use yet another app or regularly check websites for local pollen counts. There are days of the week when I'm out and about a lot and am therefore exposed to pollen. On other days, I sit in an air-conditioned office with filtered air. My calendar with all my private and professional appointments is the linchpin here. Here I can see when I am where and how much I will be exposed to pollen. But this is where an important piece of information is missing: how strong will the pollen count be on this day and at this location?</p>
        <p class="mt-6 text-lg leading-8 text-gray-700">By integrating the pollen forecast directly into the calendar, I am much more likely to pay regular attention to the pollen information. This increased visibility helps me to better plan my activities and take the necessary precautions to effectively counteract allergies or respiratory illnesses.</p>
      </div>
    </div>
  </div>
  <div class="hidden sticky mt-2 md:flex w-[400px] flex-col px-6 lg:px-8 md:top-36 md:mt-0 lg:max-w-2xl">
    <Mockup />
  </div>
</div>

<style>
</style>
