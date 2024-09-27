import { writable } from 'svelte/store';

export const config = writable({
    coords: null,
    selectedPollen: null,
});
