import { useTeamgatherAPI } from '../';
import type { TeamAPI } from './';

export const teamAPI: TeamAPI = {
	useCreateTeam: (formData) =>
		useTeamgatherAPI('POST', 'team', {}, formData, {
			'Content-Type': 'multipart/form-data'
		}),
	useGetAll: () => useTeamgatherAPI('GET', 'team/get-all', { limit: '100' }),
	useGetOneByName: (teamName: string) =>
		useTeamgatherAPI('GET', `team/get-by-name/${teamName}`, { p: 'true' }),
	useGetMemberTeam: () => useTeamgatherAPI('GET', '/team/get-teams-where-im-member', { p: 'true' }),
	useGetAdminteam: () => useTeamgatherAPI('GET', '/team/get-teams-where-im-admin', { p: 'true' })
};
