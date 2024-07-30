export interface User {
    id?: number;
    username?: string;
    password?: string;
}

export type Status = "Authorized" | "Unauthorized";