<script>
	import { spring } from 'svelte/motion';
  import Geolocation from "svelte-geolocation";
  import { user } from '../store.js';
  import { Radio } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  const defaultPollen = 'grassIndex';

  let coords = null;
  let count = 0;
  let inputLocation = '';
  let selectedPollen = defaultPollen;
  let baseUrl = "webcal://pollen.cloud.lowin.ski/";
  let distinctId;
  user.subscribe((id) => {
    distinctId = id;
  });

  $: webcalUrl= `${baseUrl}?location=${coords}&pollen=${selectedPollen}&id=${distinctId}`;
</script>

<Geolocation getPosition on:position="{(e) => { coords = [e.detail.coords.latitude, e.detail.coords.longitude] }}"/>

<div class="px-4 pt-4 my-5">
<div class="col-lg-6 mx-auto">
  <form class="mb-3">
    <div class="row g-4 align-items-center">
      <div class="col-12">
      <div class="form-floating mb-1">
        <input bind:value={inputLocation} class="form-control" type="text" placeholder="Berlin" id="locationInput" aria-label="Your location">
        <label for="locationInput">Your location</label>
      </div>
      <div class="col-12">
        <span class="form-text">Translated into the following coordinates: {#if coords}{coords}{/if}</span>
      </div>
    </div>

    <div class="d-flex flex-column flex-md-row p-4 gap-4 align-items-center justify-content-center">
      <div class="list-group list-group-radio d-grid gap-2 border-0">
	<div class="position-relative">
    <input on:change={() => (selectedPollen = 'grassIndex')} class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="listGroupRadioGrid1" value="" checked>
	  <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid1">
	    <strong class="fw-semibold">🌱 Grass</strong>
	    <span class="d-block small opacity-75">There are hundreds of types of grasses, but only a few cause allergy symptoms.</span>
	  </label>
	</div>

	<div class="position-relative">
	  <input on:change={() => (selectedPollen = 'treeIndex')} class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="listGroupRadioGrid2" value="">
	  <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid2">
	    <strong class="fw-semibold">🌳 Tree</strong>
	    <span class="d-block small opacity-75">Almond, birch, maple etc.</span>
	  </label>
	</div>

	<div class="position-relative">
	  <input on:change={() => (selectedPollen = 'weedIndex')} class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="listGroupRadioGrid3" value="">
	  <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid3">
	    <strong class="fw-semibold">🌼 Weed</strong>
	    <span class="d-block small opacity-75">Ragweed, sagebrush etc.</span>
	  </label>
	</div>

  <p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
  <div class="grid gap-6 w-full md:grid-cols-2">
    <Radio name="custom" custom>
    <div class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div>
        <div class="w-full text-lg font-semibold">0-50 MB</div>
        <div class="w-full">Good for small websites</div>
      </div>
      <ArrowRightOutline class="ms-3 w-6 h-6" />
    </div>
    </Radio>
    <Radio name="custom" custom>
    <div for="hosting-big" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="block">
        <div class="w-full text-lg font-semibold">500-1000 MB</div>
        <div class="w-full">Good for large websites</div>
      </div>
      <ArrowRightOutline class="ms-3 w-6 h-6" />
    </div>
    </Radio>
  </div>

      </div>
    </div>

    <div class="d-grid gap-2">
      <a target="_blank" rel="noopener" href={webcalUrl} class="btn btn-primary btn-lg" class:disabled={coords == null}>Add to your Calendar</a>
    </div>
  </form>
  {#if coords}
  <div class="bg-light text-center">
    <pre><samp>
    {webcalUrl}
    </samp></pre>
  </div>
  {/if}
</div>
</div>

<style>
</style>
