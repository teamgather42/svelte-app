export interface Team {
	id: string;
	teamName: string;
	creator: string;
	admin: string[];
	members: string[];
	createdAt: Date;
	updatedAt?: any;
	deletedAt?: any;
}

export interface Data {
	team: Team;
}

export interface RootObject {
	data: Data;
	error: any[];
}

export interface Pagination {
	limit: number;
	page: number;
	sort: string;
	item_count: number;
	deleted: string;
}

export interface Creator {
	id: string;
	username: string;
	firstname: string;
	lastname: string;
	email: string;
	roles: string[];
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: any;
}

export interface Admin {
	id: string;
	username: string;
	firstname: string;
	lastname: string;
	email: string;
	roles: string[];
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: any;
}

export interface Member {
	id: string;
	username: string;
	firstname: string;
	lastname: string;
	email: string;
	roles: string[];
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: any;
}

export interface Team {
	id: string;
	teamName: string;
	creator: Creator;
	admin: Admin[];
	members: Member[];
	createdAt: Date;
	updatedAt?: any;
	deletedAt?: any;
}

export interface PaginateData {
	pagination: Pagination;
	teams: Team[];
}

export interface GetAllData {
	data: PaginateData;
	error: any[];
}

export interface TeamAPI {
	/**
	 * Allow user to create a team.
	 * @param teamName The team name.
	 * @returns An error message or team informations if success.
	 */
	useCreateTeam: (teamName: any) => Promise<RootObject>;
	/**
	 * Allow to get all teams.
	 * @returns A list of team.
	 */
	useGetAll: () => Promise<any>;
	useGetOneByName: (teamName: any) => Promise<any>;
	useGetMemberTeam: () => Promise<any>;
	useGetAdminteam: () => Promise<any>;
}
