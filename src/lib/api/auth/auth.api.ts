import { useFetch } from '../base.api';
import { buildUrl } from '$lib/utils/url';
import type { HttpMethod } from '../base.api';
import type { QueryParams } from '$lib/utils/url';

const useAuthAPI: (
	method: HttpMethod,
	endpoint: string,
	queryParams?: QueryParams,
	body?: any
) => Promise<any> = async (method, endpoint, queryParams = null, body = {}) => {
	// Get BFF access token from the store.
	const config: Partial<RequestInit> = {
		headers: {},
		credentials: 'same-origin',
		mode: 'cors',
		body: JSON.stringify(body)
	};

	const url = buildUrl(
		`${import.meta.env.API_BASE_URL}/${import.meta.env.API_VERSION}`,
		endpoint,
		queryParams
	);
	const response = await useFetch(method, url, config);
	return response.json();
};

export { useAuthAPI };
