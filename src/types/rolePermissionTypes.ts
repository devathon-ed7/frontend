export interface RolePermission {
  role_id: number;
  permission_id: number;
  active: boolean;
}

export interface RolePermissionsResponse {
  permissions: RolePermission[];
}

export interface RolePermissionRequest {
  role_id: number;
  permission_id: number;
  active: boolean;
}
