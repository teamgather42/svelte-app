export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * Just a bit a syntaxic sugar over the fetch API.
 * Also allows to manage global loading state.
 * @param method
 * @param url
 * @param config
 * @returns
 */
const useFetch: (
	method: HttpMethod,
	url: string,
	config: Partial<RequestInit>
) => Promise<any> = async (method, url, config) => {
	let response;
	const initConfig = { ...config, method };

	response = await fetch(url, initConfig);
	return response;
};

export { useFetch };
