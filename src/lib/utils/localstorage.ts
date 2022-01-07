import { browser } from '$app/env';

const setLocalstorageItem = (key: string, value: string) =>
	browser && localStorage.setItem(key, value);

const getLocalstorageItem = (key: string) => browser && localStorage.getItem(key);

const removeLocalstorageItem = (key: string) => browser && localStorage.removeItem(key);

const clearLocalstorage = () => browser && localStorage.clear();

export { setLocalstorageItem, getLocalstorageItem, removeLocalstorageItem, clearLocalstorage };
