<script>
	import { spring } from 'svelte/motion';
  import Geolocation from "svelte-geolocation";
  import { user } from '../store.js';

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
