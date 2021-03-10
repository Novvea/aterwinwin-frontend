export interface i_loginCredentials {
  username: string;
  password: string;
  isAuthenticated: boolean;
}

export interface i_createNewUser {
  username: string,
  password: string,
  /* age?: number */
}
