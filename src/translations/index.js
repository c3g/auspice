/*
 * index.js
 */

import en from './en';
import fr from './fr';

const locales = { en, fr }

const DEFAULT_LOCALE = 'fr'

export const availableLocales = {
  'en': 'English',
  'fr': 'Français',
}

let currentLocale = DEFAULT_LOCALE
let listeners = []

export function setLocale(locale) {
  currentLocale = locale
  listeners.forEach(l => { l(currentLocale) })
}

export function addListener(listener) {
  listeners.push(listener)
}

const handler = {
  get: function(_, prop) {
    const lang = locales[currentLocale];
    return lang[prop];
  }
};

const strings = new Proxy({}, handler);

export default strings;
