<script>
	import Form from './Form.svelte';
	import screenshot from '$lib/images/pollencal-screenshot.png';
</script>

<svelte:head>
<title>Pollen Forecast Webcal</title>
</svelte:head>

<section class="container mx-auto py-3">

  <div class="px-4 pt-5 my-5 text-center border-b">
    <h1 class="text-5xl font-bold py-4">Pollen Forecast Webcal</h1>
    <div class="lg:w-2/3 mx-auto">
      <p class="text-xl font-light text-gray-600 pt-6 pb-12">Get the pollen forecast for your location directly into your calendar. This webcal uses emojis to display a forecast of various pollen indexes for up to 5 days. Enter your city and select your pollen index to get your individual calendar feed. Works with all calendars supporting online .ics and emojis, like Google Calendar, Apple Calendar, Outlook or others.</p>
    </div>
    <div class="w-full lg:w-3/4 mx-auto overflow-hidden" style="max-height: 30vh;">
      <div class="px-5">
        <img src="{screenshot}" class="mx-auto" alt="Screenshot of calendar" loading="lazy">
      </div>
    </div>
  </div>

  <Form />
</section>

<style>
</style>
