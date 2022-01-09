import { useFetch } from '../base.api';
import { buildUrl } from '$lib/utils/url';
import type { HttpMethod } from '../base.api';
import type { QueryParams } from '$lib/utils/url';
import { getApiUrl, getApiVersion } from '$lib/utils/env.variables';

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

	const url = buildUrl(`${getApiUrl}/${getApiVersion}`, endpoint, queryParams);
	const response = await useFetch(method, url, config);
	return response.json();
};

export { useAuthAPI };
