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

export type UserResponse = {
	error: any[];
	user: UserModel | null;
};
