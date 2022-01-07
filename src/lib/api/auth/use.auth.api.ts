import { useAuthAPI } from '.';
import type { Login, Register, AuthApi } from './';

export const authAPI: AuthApi = {
	useLogin: (body: Login) => useAuthAPI('POST', 'login', {}, { ...body }),
	useRegister: (body: Register) => useAuthAPI('POST', 'sign-up', {}, { ...body })
};
