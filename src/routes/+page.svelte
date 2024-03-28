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
      <p class="text-xl font-light text-gray-600 pt-6 pb-12">Get the pollen forecast for your location directly into your calendar. This webcal uses emojis to display a 5 days forecast of various pollen indexes. Enter your city, select your pollen index and adjust your preferences the get the feed. Works with all calendars supporting online .ics and emojis, like Google Calendar, Apple Calendar, Outlook or others.</p>
    </div>
    <div class="overflow-hidden" style="max-height: 30vh;">
      <div class="px-5">
        <img src="{screenshot}" class="mx-auto border rounded-3 drop-shadow-xl mb-4" alt="Screenshot of calendar" width="700" height="500" loading="lazy">
      </div>
    </div>
  </div>

  <Form />
</section>

<style>
</style>
