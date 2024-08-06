export interface RolePermission {
  role_id: number;
  permission_id: number;
  active: boolean;
  name: string;
}

export interface RolePermissionsResponse {
  rolePermission: RolePermission[];
  message: string;
}

export interface RolePermissionRequest {
  role_id: number;
  permission_id: number;
  active: boolean;
}
