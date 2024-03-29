<script>
  import { Button, Input, Label, Radio } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  /** @type {string} */
  export let name;
  export let val = name;

  let radioName = `${name}GroupRadio`;
  let radioId = `${name}GroupRadioId`;
</script>

<Radio name="{radioName}" custom value="{name}" bind:group={val} class="form-check-input position-absolute top-50 end-0 fs-5" type="radio" id="{radioId}">
  <div for="{radioName}" class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div>
      <div class="w-full text-lg font-semibold"><slot name="title" /></div>
    </div>
    <ArrowRightOutline class="ms-3 w-6 h-6" />
  </div>
</Radio>

<style>
</style>
