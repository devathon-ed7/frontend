import { useRolePermissionStore } from "../store/rolePermission.store";
import rolePermissionService from "../services/rolePermission";
import { RolePermissionRequest } from "../types/rolePermissionTypes";

const useRolePermission = () => {
  const setRolePermissions = useRolePermissionStore((state) => state.setRolePermissions);

  const createRolePermission = async (data: RolePermissionRequest) => {
    const response = await rolePermissionService.createRolePermission(data);
    if (response.status === 201) {
      //TODO: get role permissions
    }
  };

  return { createRolePermission };
};

export default useRolePermission;
