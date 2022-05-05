import { useTeamgatherAPI } from '../teamgather.api';

export const projectAPI = {
	useGetAll: () => useTeamgatherAPI('GET', '/project/all', { p: 'true' }),
	useCreate: (body) => useTeamgatherAPI('POST', '/project', null, body)
};
