export interface Role {
  id: number;
  name: string;
  description: string;
}

export interface RolesResponse {
  roles: Role[];
}

export interface RoleRequest {
  name: string;
  description: string;
}
