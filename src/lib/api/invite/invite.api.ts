import { useTeamgatherAPI } from '../teamgather.api';

export const inviteAPI = {
	useGetMyInvite: () => useTeamgatherAPI('GET', 'invites-links/get-my', {}),
	useDeleteInvite: (token) =>
		useTeamgatherAPI('DELETE', 'invites-links', null, null, { Authorization: token })
};
