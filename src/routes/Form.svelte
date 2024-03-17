<script>
	import { spring } from 'svelte/motion';
  import Geolocation from "svelte-geolocation";
  import { user } from '../store.js';
  import { Button, Input, Label, Radio } from 'flowbite-svelte';
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

<div class="lg:w-2/3 mx-auto px-4 pt-4 my-5">
<div class="col-lg-6 mx-auto">
  <form class="mb-3">
    <div class="row g-4 align-items-center">
      <div class="col-12">
      <div class="form-floating mb-1">
        <Label for="locationInput">Your location</Label>
        <Input bind:value={inputLocation} class="form-control" type="text" size="lg" placeholder="Berlin" id="locationInput" aria-label="Your location" />
      </div>
      <div class="col-12">
        <span class="form-text">Translated into the following coordinates: {#if coords}{coords}{/if}</span>
      </div>
    </div>

    <div class="py-4">

  <div class="grid gap-6 w-full md:grid-cols-2 xl:grid-cols-3">
    <Radio name="grassIndex" custom bind:group={selectedPollen} value="grassIndex" class="form-check-input position-absolute top-50 end-0 fs-5" type="radio" id="listGroupRadioGrid1" checked>
    <div class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div>
        <div class="w-full text-lg font-semibold">🌱 Grass</div>
        <div class="w-full">There are hundreds of types of grasses, but only a few cause allergy symptoms.</div>
      </div>
      <ArrowRightOutline class="ms-3 w-6 h-6" />
    </div>
    </Radio>
    <Radio name="treeIndex" custom bind:group={selectedPollen} value="treeIndex" class="form-check-input position-absolute top-50 end-0 fs-5" type="radio" id="listGroupRadioGrid2">
    <div for="treeIndex" class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="block">
        <div class="w-full text-lg font-semibold">🌳 Tree</div>
        <div class="w-full">Almond, birch, maple etc.</div>
      </div>
      <ArrowRightOutline class="ms-3 w-6 h-6" />
    </div>
    </Radio>
    <Radio name="weedIndex" custom bind:group={selectedPollen} value="weedIndex" class="form-check-input position-absolute top-50 end-0 fs-5" type="radio" id="listGroupRadioGrid3">
    <div for="hosting-big" class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="block">
        <div class="w-full text-lg font-semibold">🌼 Weed</div>
        <div class="w-full">Ragweed, sagebrush etc.</div>
      </div>
      <ArrowRightOutline class="ms-3 w-6 h-6" />
    </div>
    </Radio>
  </div>

    </div>

    <div class="">
      <Button target="_blank" rel="noopener" href={webcalUrl} size="lg" class="font-semibold w-full" disabled={coords == null}>Add to your Calendar</Button>
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
