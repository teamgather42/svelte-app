import { useFetch } from './';
import type { HttpMethod } from './';
import { buildUrl } from '$lib/utils/url';
import type { QueryParams } from '$lib/utils/url';
import { getApiUrl, getApiVersion } from '$lib/utils/env.variables';
import { get } from 'svelte/store';
import { authenticatedToken } from '$lib/stores';

/**
 * Allow to get the api base url.
 * @returns The api base url.
 */
const getTeamgatherBaseUrl: () => string = () => `${getApiUrl}/${getApiVersion}`;

/**
 * Allow to add headers.
 * @param customHeaders An array of object containing {key: value}.
 * @returns The headers.
 */
const getTeamgatherHeaders: (customHeaders: Object) => Headers = (customHeaders) => {
	const headers = new Headers();
	if (get(authenticatedToken) && !customHeaders?.Authorization)
		headers.append('Authorization', `Bearer ${get(authenticatedToken)}`);
	if (customHeaders)
		Object.entries(customHeaders).map(([value, key]) => headers.append(value, key));
	return headers;
};

/**
 *
 * @param method The HTTP method.
 * @param endpoint The api endpoint to call.
 * @param queryParams The query params to send.
 * @param body The request body to send.
 * @param customHeaders Allow to add custom headers.
 * @returns A promise with the result.
 */
const useTeamgatherAPI: (
	method: HttpMethod,
	endpoint: string,
	queryParams: QueryParams,
	body?: Object,
	customHeaders?: Object
) => Promise<any> = async (method, endpoint, queryParams, body = null, customHeaders = null) => {
	const headers = getTeamgatherHeaders(customHeaders);
	const config: Partial<RequestInit> = { headers, credentials: 'same-origin', mode: 'cors' };
	if (body) config.body = JSON.stringify(body);
	const url = buildUrl(getTeamgatherBaseUrl(), endpoint, queryParams);
	const response = await useFetch(method, url, config);
	return response.json();
};

export { useTeamgatherAPI };
