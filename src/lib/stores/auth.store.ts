import { writable } from 'svelte/store';
import type { AuthenticatedToken } from '$lib/types/';
import { browser } from '$app/env';
import { setLocalstorageItem, removeLocalstorageItem } from '$lib/utils/localstorage';

/**
 * Rertrieve the user token from the local storage.
 */
const token: AuthenticatedToken = browser && localStorage.getItem('token');
/**
 * Store that contain the user token if the user is logged in.
 */
const authenticatedToken = writable<AuthenticatedToken>(token);
/**
 * Allow to set the user's token.
 * @param token The token.
 */
const setAuthenticatedToken = (token: string) => authenticatedToken.set(token);
/**
 * Remove the token from the store.
 */
const removeAuthenticatedToken = () => authenticatedToken.set(null);
/**
 * Update the local storage each time the token is update.
 */
authenticatedToken.subscribe((value) => {
	if (value) setLocalstorageItem('token', value);
	else if (value === null) removeLocalstorageItem('token');
});

export { authenticatedToken, setAuthenticatedToken, removeAuthenticatedToken };
