import { initI18n } from './src/lib/i18n';

// Init i18n before executing scripts
initI18n();

jest.mock('$lib/utils/localstorage.ts', () => ({
	localStorage: jest.fn(),
	getLocalstorageItem: jest.fn(),
	setLocalstorageItem: jest.fn()
}));
