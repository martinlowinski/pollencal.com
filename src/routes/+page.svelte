<script>
	import Form from './Form.svelte';
	import screenshot from '$lib/images/pollencal-screenshot.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold text-body-emphasis">Pollen Forecast Webcal</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-5">You can get the pollen forecast for your location directly into your calendar. This webcal uses emojis to display a 5 days forecast of various pollens. Enter your city, select pollens and adjust your preferences the get the feed. Works with all calendars supporting online .ics and emojis, like Google Calendar, Apple Calendar, Outlook or others.</p>
        </div>
        <div class="overflow-hidden" style="max-height: 30vh;">
          <div class="container px-5">
            <img src="{screenshot}" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">
          </div>
        </div>
      </div>

	<Form />
</section>

<style>
</style>
