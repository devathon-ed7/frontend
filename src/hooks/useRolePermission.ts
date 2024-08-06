import { useRolePermissionStore } from "../store/rolePermission.store";
import rolePermissionService from "../services/rolePermission";
import { RolePermissionRequest, RolePermissionsResponse } from "../types/rolePermissionTypes";

const useRolePermission = () => {
  const setRolePermissions = useRolePermissionStore((state) => state.setRolePermissions);

  const createRolePermission = async (data: RolePermissionRequest) => {
    const response = await rolePermissionService.createRolePermission(data);
    if (response.status === 201) {
      //TODO: get role permissions
    }
  };

  const getPermissionForRole = async (role_id: number) => {
    const response = await rolePermissionService.getPermissionsforRole(role_id);
    if (response.status === 200) {
      const data = response.data as RolePermissionsResponse;
      setRolePermissions(data.rolePermission);
    }
  };

  return { createRolePermission, getPermissionForRole };
};

export default useRolePermission;
