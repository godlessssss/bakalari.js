export interface UserTypes {
    url: string,
    username: string;
	password: string;
	access_token?: string;
	refresh_token?: string;
	expires_in?: number;
}

export interface AuthParameters {
    client_id: string;
	grant_type: string;
	username?: string;
	password?: string;
	refresh_token?: string;
}