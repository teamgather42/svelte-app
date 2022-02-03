import { useTeamgatherAPI } from '../';
import type { Login, Register, AuthApi } from './';

export const authAPI: AuthApi = {
	useLogin: (body: Login) => useTeamgatherAPI('POST', 'login', {}, { ...body }),
	useRegister: (body: Register) => useTeamgatherAPI('POST', 'sign-up', {}, { ...body })
};
