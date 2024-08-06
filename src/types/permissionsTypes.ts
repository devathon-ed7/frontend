export interface Permission {
  id: number;
  name: string;
  active: boolean;
}

export interface PermissionsResponse {
  permissions: Permission[];
}

export interface PermissionRequest {
  name: string;
}
