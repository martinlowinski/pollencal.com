<script>
  import { run } from 'svelte/legacy';

  import { fade } from 'svelte/transition';
  import Geolocation from "svelte-geolocation";
  import { user } from '../store.js';
  import { Button } from 'flowbite-svelte';
  import { Spinner } from 'flowbite-svelte';
  import { Tooltip } from 'flowbite-svelte';
  import { CheckCircleSolid, ExclamationCircleSolid } from 'flowbite-svelte-icons';
  import PollenOption from '$lib/PollenOption.svelte';
  import { config } from '$lib/store.js'

  const defaultPollen = null;// = 'graminales';

  let getPosition = $state(false);
  let coords = $state(null);
  let count = 0;
  let inputLocation = '';
  let selectedPollen = $state(defaultPollen);
  const baseUrl = "webcal://api.pollencal.com/";
  let distinctId = $state();
  user.subscribe((id) => {
    distinctId = id;
  });

  let webcalUrl= $derived(`${baseUrl}?location=${coords}&pollen=${selectedPollen}&id=${distinctId}`);
  run(() => {
    $config.coords = coords;
  });
</script>

<Geolocation
  getPosition="{getPosition}"
  
  
  on:position="{(e) => { coords = [e.detail.coords.latitude, e.detail.coords.longitude] }}"
>
  {#snippet children({ loading, error })}
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
                <PollenOption bind:val={selectedPollen} name="alder">
                  {#snippet title()}
                                <div >🌳 Alder</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="ash">
                  {#snippet title()}
                                <div >🌳 Ash</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="birch">
                  {#snippet title()}
                                <div >🌳 Birch</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="cottonwood">
                  {#snippet title()}
                                <div >🌳 Cottonwood</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="elm">
                  {#snippet title()}
                                <div >🌳 Elm</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="maple">
                  {#snippet title()}
                                <div >🌳 Maple</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="olive">
                  {#snippet title()}
                                <div >🌳 Olive</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="juniper">
                  {#snippet title()}
                                <div >🌳 Juniper</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="oak">
                  {#snippet title()}
                                <div >🌳 Oak</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="pine">
                  {#snippet title()}
                                <div >🌳 Pine</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="cypress_pine">
                  {#snippet title()}
                                <div >🌳 Cypress Pine</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="hazel">
                  {#snippet title()}
                                <div >🌳 Hazel</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="graminales">
                  {#snippet title()}
                                <div >🌱 Grasses</div>
                              {/snippet}
                  {#snippet description()}
                                <div >There are hundreds of types of grasses, but only a few cause allergy symptoms.</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="ragweed">
                  {#snippet title()}
                                <div >🌼 Ragweed</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
                <PollenOption bind:val={selectedPollen} name="mugwort">
                  {#snippet title()}
                                <div >🌼 Mugwort</div>
                              {/snippet}
                  {#snippet description()}
                                <div >...</div>
                              {/snippet}
                </PollenOption>
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
  {/snippet}
</Geolocation>

<style>
</style>
