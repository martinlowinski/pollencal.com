<script>
  import { fade } from 'svelte/transition';
  import Geolocation from "svelte-geolocation";
  import { user } from '../store.js';
  import { Button } from 'flowbite-svelte';
  import { Spinner } from 'flowbite-svelte';
  import { Tooltip } from 'flowbite-svelte';
  import { CheckCircleSolid, ExclamationCircleSolid } from 'flowbite-svelte-icons';
  import PollenOption from '$lib/PollenOption.svelte';
  import { config } from '$lib/store.js'

  const pollenOptions = [
	  {
		  index: "alder",
		  title: "🌳 Alder"
	  },
	  {
		  index: "ash",
		  title: "🌳 Ash"
	  },
	  {
		  index: "birch",
		  title: "🌳 Birch"
	  },
	  {
		  index: "cottonwood",
		  title: "🌳 Cottonwood"
	  },
	  {
		  index: "elm",
		  title: "🌳 Elm"
	  },
	  {
		  index: "maple",
		  title: "🌳 Maple"
	  },
	  {
		  index: "olive",
		  title: "🌳 Olive"
	  },
	  {
		  index: "juniper",
		  title: "🌳 Juniper"
	  },
	  {
		  index: "oak",
		  title: "🌳 Oak"
	  },
	  {
		  index: "pine",
		  title: "🌳 Pine"
	  },
	  {
		  index: "cypress_pine",
		  title: "🌳 Cypress Pine"
	  },
	  {
		  index: "hazel",
		  title: "🌳 Hazel"
	  },
	  {
		  index: "graminales",
		  title: "🌱 Grasses",
      description: "There are hundreds of types of grasses, but only a few cause allergy symptoms."
	  },
	  {
		  index: "ragweed",
		  title: "🌼 Ragweed"
	  },
	  {
		  index: "mugwort",
		  title: "🌼 Mugwort"
	  },
  ];
  const defaultPollen = null;// = 'graminales';

  let getPosition = false;
  let coords = null;
  let count = 0;
  let inputLocation = '';
  let selectedPollen = defaultPollen;
  const baseUrl = "webcal://api.pollencal.com/";
  let distinctId;
  user.subscribe((id) => {
    distinctId = id;
  });

  $: webcalUrl= `${baseUrl}?location=${coords}&pollen=${selectedPollen}&id=${distinctId}`;
  $: $config.coords = coords;
  $: $config.selectedPollen = pollenOptions.find(o => o.index === selectedPollen)?.title;
</script>

<Geolocation
  getPosition="{getPosition}"
  let:loading
  let:error
  on:position="{(e) => { coords = [e.detail.coords.latitude, e.detail.coords.longitude] }}"
>
  <div id="setup" class="mx-auto pt-4 my-24">
    <div class="mx-auto">
      <form class="">
        <div class="py-8">
          <div class="text-xl pb-4 flex items-center justify-between">
            1. Select your pollen index
            <div class:hidden={!selectedPollen}>
              <CheckCircleSolid class="" />
            </div>
          </div>
          <div class="py-2 mb-4">
            <div class="grid gap-2 lg:gap-4 w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {#each pollenOptions as option, i}
              <PollenOption bind:val={selectedPollen} name={option.index}>
                <div slot="title">{option.title}</div>
                <div slot="description">...</div>
              </PollenOption>
              {/each}
            </div>
          </div>
        </div>

        <div class="py-8">
          <div class="text-xl pb-4 flex items-center justify-between">
            2. Retrieve precise location information
            <div class:hidden={!coords}>
              <CheckCircleSolid class="" />
            </div>
          </div>
          <div class="row g-4 align-items-center">
            <div class="col-6">
              <Button on:click="{() => (getPosition = true)}" class="font-semibold w-full text-lg">
          Lookup location
                <span class:hidden={!loading}>
                  <Spinner class="ms-2" size="4" />
                </span>
                <span class:hidden={!coords}>
                  <CheckCircleSolid class="ms-2" />
                </span>
                <span class:hidden={!error}>
                  <ExclamationCircleSolid class="ms-2" />
                </span>
              </Button>
              {#if !coords}
              <Tooltip>Please allow the browser to retrieve your location</Tooltip>
              {/if}
              <div class="my-2">or</div>
              <div class="mb-5">
                <input type="text" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Stuttgart, Germany" />
              </div>
              {#if coords}
              <div class="col-12" transition:fade={{ delay: 250, duration: 300 }}>
                <span class="text-sm font-light text-black-900">Location found: {#if coords}{coords}{/if}</span>
              </div>
              {/if}
              {#if error}
              <div class="col-12" transition:fade={{ delay: 250, duration: 300 }}>
                <span class="text-sm font-normal text-red-900">Sorry, there was an error: {error.message}</span>
              </div>
              {/if}
            </div>
          </div>
        </div>
        <div class="py-8">
          <div class="text-xl pb-4">
            3. Subscribe to your individual calendar
          </div>
          <div class="">
            <Button id="add" target="_blank" rel="noopener" href={webcalUrl} size="lg" class="font-semibold w-full text-lg" disabled={coords == null || selectedPollen == null}>Add to your Calendar</Button>
            {#if !coords}
              <Tooltip triggeredBy="[id='add']">Please lookup your location first</Tooltip>
            {:else if !selectedPollen}
              <Tooltip triggeredBy="[id='add']">Please select your pollen index first</Tooltip>
            {/if}
          </div>
        </div>

        {#if coords && selectedPollen}
        <span class="text-sm font-light text-black-900">If nothing happens, copy the following URL and subscribe manually with your calendar app:</span>
        <div class="overflow-x-auto break-all py-4 px-2 font-mono text-sm bg-gray-100 text-center">
          {webcalUrl}
        </div>
        {/if}
      </form>
    </div>
  </div>
</Geolocation>

<style>
</style>
