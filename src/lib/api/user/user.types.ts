export interface UserAPI {
	/**
	 * Allow to get a user by a username.
	 * @param username The username of the user.
	 * @returns The user or error if no data.
	 */
	getOneByUsername: (username: string) => Promise<UserResponse>;
	/**
	 * Allow to update user data.
	 * @param fields Object containing the fields with the new values.
	 * @returns The updated datas.
	 */
	updateUser: (fields: object) => Promise<UserResponse>;
	/**
	 * Allow to retrieve authenitcated user's information.
	 * @returns The authenitcated user's datas.
	 */
	getMyAccount: () => Promise<UserResponse>;
	/**
	 * Allow to disable an account.
	 * @returns The user with disabled field set.
	 */
	disableAccount: () => Promise<UserResponse>;
}

export type UserModel = {
	id: string;
	username: string;
	firstname: string;
	lastname: string;
	email: string;
	roles: string[];
	createdAt: Date;
	updatedAt?: any;
	deletedAt?: any;
};

export type UserData = {
	user: UserModel;
};

export type UserResponse = {
	error: any[];
	data: UserData | null;
};
