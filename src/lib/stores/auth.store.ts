import { writable } from 'svelte/store';
import type { AuthenticatedToken } from '$lib/types/';
import { browser } from '$app/env';
import { setLocalstorageItem, removeLocalstorageItem } from '$lib/utils/localstorage';

const token: AuthenticatedToken = browser && localStorage.getItem('token');

const authenticatedToken = writable<AuthenticatedToken>(token);

const setAuthenticatedToken = (token: string) => authenticatedToken.set(token);

const removeAuthenticatedToken = () => authenticatedToken.set(null);

authenticatedToken.subscribe((value) => {
	if (value) setLocalstorageItem('token', value);
	else if (value === null) removeLocalstorageItem('token');
});

export { authenticatedToken, setAuthenticatedToken, removeAuthenticatedToken };
