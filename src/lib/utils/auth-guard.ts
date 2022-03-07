import { authenticatedToken } from '$lib/stores';
import { get } from 'svelte/store';

export const authGuard = () => {
	if (!get(authenticatedToken)) return false;
	return true;
};
