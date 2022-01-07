export type Login = {
	password: string;
	username?: string;
	email?: string;
};

export type LoginResponse = {
	error: string;
	token: string;
};

export type Register = {
	username: string;
	firstname: string;
	lastname: string;
	password: string;
	email: string;
};

export type RegisterResponse = {
	error: string;
	user: User;
};

export type User = {
	id: string;
	email: string;
	username: string;
	firstname: string;
	lastname: string;
	password: string;
	roles: Roles;
	updatedAt: string;
	createdAt: string;
};

export type Roles = string[];

export interface AuthApi {
	/**
	 * Allow user to login.
	 * @param body The request body.
	 * @returns An error message or token if success.
	 */
	useLogin: (body: Login) => Promise<LoginResponse>;
	/**
	 * Allow user to register.
	 * @param body The request body.
	 * @returns An error message or user informations if success.
	 */
	useRegister: (body: Register) => Promise<RegisterResponse>;
}
