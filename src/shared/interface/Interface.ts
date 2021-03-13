export interface i_loginCredentials {
  email: string;
  password: string;
  /*   isAuthenticated: boolean; */
}

export interface i_createNewUser {
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  /* age?: number */
}

export interface i_addItem {
  itemname: string,
  category: string
}