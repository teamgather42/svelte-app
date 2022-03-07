import { useTeamgatherAPI } from '../';
import type { UserAPI } from './user.types';

export const userAPI: UserAPI = {
	getOneByUsername: (username: string) =>
		useTeamgatherAPI('GET', `user/get-by-username/${username}`, {}),
	updateUser: (fields: object) => useTeamgatherAPI('PUT', 'user', {}, { ...fields }),
	getMyAccount: () => useTeamgatherAPI('GET', 'user/get-my-account', {}),
	disableAccount: () => useTeamgatherAPI('DELETE', 'user', {})
};
