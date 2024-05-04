import i18n from 'sveltekit-i18n';

export const defaultLocale = 'en';

const lang = {
	  "en": "English",
	  "de": "German"
}

/** @type {import('sveltekit-i18n').Config} */
const config = ({
	translations: {
		en: { lang },
		de: { lang },
	},
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (
				await import('./locales/en/common.json')
			).default,
		},
		{
			locale: 'de',
			key: 'common',
			loader: async () => (
				await import('./locales/de/common.json')
			).default,
		},
	],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
