export interface Auth {
    stateAuth: string,
    user: User | null,
    error: string | null
}


export interface UserResponse {
    ok:    boolean;
    msg:   string;
    user:  User;
    token: string;
}

export interface User {
    name:   string;
    email:  string;
    status: boolean;
    id:     string;
}


export interface Form {
    name?:   string;
    email:  string;
    password: string;
    password2?: string;
}