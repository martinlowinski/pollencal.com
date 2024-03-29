<script>
	import { spring } from 'svelte/motion';
  import Geolocation from "svelte-geolocation";
  import { user } from '../store.js';
  import { Button, Input, Label, Radio } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import PollenOption from '$lib/PollenOption.svelte';

  const defaultPollen = 'graminales';

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
  $: console.log(selectedPollen);
</script>

<Geolocation getPosition on:position="{(e) => { coords = [e.detail.coords.latitude, e.detail.coords.longitude] }}"/>

<div class="lg:w-2/3 mx-auto px-4 pt-4 my-5">
<div class="col-lg-6 mx-auto">
  <form class="mb-3">
    <div class="row g-4 align-items-center">
      <div class="col-12">
      <div class="form-floating mb-0">
        <Label for="locationInput">Your location</Label>
        <Input bind:value={inputLocation} class="form-control" type="text" size="lg" placeholder="e.g. Berlin" id="locationInput" aria-label="Your location" />
      </div>
      <div class="col-12 mb-2">
        <span class="text-sm font-light text-black-900">Translated into the following coordinates: {#if coords}{coords}{/if}</span>
      </div>
    </div>

    <div class="py-4">
      <div class="grid gap-6 w-full md:grid-cols-2 xl:grid-cols-3">
        <PollenOption bind:val={selectedPollen} name="alder">
          <div slot="title">🌳 Alder</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="ash">
          <div slot="title">🌳 Ash</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="birch">
          <div slot="title">🌳 Birch</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="cottonwood">
          <div slot="title">🌳 Cottonwood</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="elm">
          <div slot="title">🌳 Elm</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="maple">
          <div slot="title">🌳 Maple</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="olive">
          <div slot="title">🌳 Olive</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="juniper">
          <div slot="title">🌳 Juniper</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="oak">
          <div slot="title">🌳 Oak</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="pine">
          <div slot="title">🌳 Pine</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="cypress_pine">
          <div slot="title">🌳 Cypress Pine</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="hazel">
          <div slot="title">🌳 Hazel</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="graminales">
          <div slot="title">🌱 Grasses</div>
          <div slot="description">There are hundreds of types of grasses, but only a few cause allergy symptoms.</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="ragweed">
          <div slot="title">🌼 Ragweed</div>
          <div slot="description">...</div>
        </PollenOption>
        <PollenOption bind:val={selectedPollen} name="mugwort">
          <div slot="title">🌼 Mugwort</div>
          <div slot="description">...</div>
        </PollenOption>
      </div>
    </div>

    <div class="">
      <Button target="_blank" rel="noopener" href={webcalUrl} size="lg" class="font-semibold w-full text-lg" disabled={coords == null}>Add to your Calendar</Button>
    </div>
  </form>
  {#if coords}
  <div class="overflow-x-auto py-4 px-2 font-mono text-sm bg-gray-100 text-center">
    {webcalUrl}
  </div>
  {/if}
</div>
</div>

<style>
</style>
