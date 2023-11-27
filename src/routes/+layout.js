import posthog from 'posthog-js'
import { browser } from '$app/environment';

export const load = async () => {

  if (browser) {
    posthog.init(
      'phc_FXmprHjO6NogQICHZX6p18CWPsoeOi4xrNKjcemXmnN',
      {
        api_host: 'https://eu.posthog.com',
        capture_pageview: false,
        capture_pageleave: false
      }
    )
  }
  return
};
