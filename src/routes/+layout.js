import posthog from 'posthog-js'
import { browser } from '$app/environment';
import { user } from '../store.js';
import { loadTranslations } from '$lib/translations';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();

export const load = async () => {
  if (browser) {
    posthog.init(
      'phc_FXmprHjO6NogQICHZX6p18CWPsoeOi4xrNKjcemXmnN',
      {
        api_host: 'https://eu.posthog.com',
        capture_pageview: false,
        capture_pageleave: false,
        loaded: function(posthog) {
          user.update((id) => posthog.get_distinct_id());
        }
      }
    )
  }

	const initLocale = 'en'; // get from cookie, user session, ...
	await loadTranslations(initLocale); // keep this just before the `return`

	return {};
};
