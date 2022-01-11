import { t, addMessages, getLocaleFromNavigator, init, locale, locales } from 'svelte-i18n';
import en from './en.json';
import frFR from './fr-FR.json';

export type Language = 'en' | 'fr-FR';
type LocaleJson = typeof en;
type Locales = { [key in Language]: LocaleJson };

const buybackLocales: Locales = {
	en: en,
	'fr-FR': frFR
};

const localesToText = {
	en: 'English',
	'fr-FR': 'Francais'
};

let i18nLoaded = false;

/**
 * Initialize locale dictionnaries and use navigator locale.
 */
const initI18n = () => {
	if (!i18nLoaded) {
		for (const [key, value] of Object.entries(buybackLocales)) addMessages(key, value);

		init({
			fallbackLocale: 'en',
			initialLocale: getLocaleFromNavigator()
		});
		i18nLoaded = true;
	}
};

export { t, initI18n, locale, locales, localesToText };
