<script>
	import { spring } from 'svelte/motion';

  const defaultPollen = 'grass';

	let count = 0;
  let inputLocation = '';
  let selectedPollen = defaultPollen;
	let baseUrl = "webcal://pollencal.com/";

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	/**
	 * @param {number} n
	 * @param {number} m
	 */
	function modulo(n, m) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>


<div class="px-4 pt-4 my-5">
<div class="col-lg-6 mx-auto">
  <form class="mb-3">
    <div class="form-floating mb-3">
      <input bind:value={inputLocation} class="form-control form-control-lg" type="text" placeholder="Berlin" id="locationInput" aria-label="Your location">
      <label for="locationInput">Your location</label>
    </div>

    <div class="d-flex flex-column flex-md-row p-4 gap-4 align-items-center justify-content-center">
      <div class="list-group list-group-radio d-grid gap-2 border-0">
	<div class="position-relative">
    <input on:change={() => (selectedPollen = 'grass')} class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="listGroupRadioGrid1" value="" checked>
	  <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid1">
	    <strong class="fw-semibold">🌱 Grass</strong>
	    <span class="d-block small opacity-75">There are hundreds of types of grasses, but only a few cause allergy symptoms.</span>
	  </label>
	</div>

	<div class="position-relative">
	  <input on:change={() => (selectedPollen = 'tree')} class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="listGroupRadioGrid2" value="">
	  <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid2">
	    <strong class="fw-semibold">🌳 Tree</strong>
	    <span class="d-block small opacity-75">Almond, birch, maple etc.</span>
	  </label>
	</div>

	<div class="position-relative">
	  <input on:change={() => (selectedPollen = 'weed')} class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="listGroupRadioGrid3" value="">
	  <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid3">
	    <strong class="fw-semibold">🌼 Weed</strong>
	    <span class="d-block small opacity-75">Ragweed, sagebrush etc.</span>
	  </label>
	</div>

      </div>
    </div>

    <div class="d-grid gap-2">
      <a target="_blank" rel="noopener" href="webcal://pollencal.com/?location=Ditzingen&pollen=grass" class="btn btn-primary btn-lg" class:disabled={inputLocation === ''}>Add to your Calendar</a>
    </div>
  </form>
  {#if inputLocation}
  <div class="bg-light text-center">
    <pre><samp>
    {baseUrl}?location={inputLocation}&pollen={selectedPollen}
    </samp></pre>
  </div>
  {/if}
</div>
</div>

<style>
</style>
