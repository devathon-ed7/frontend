// import { useRolePermissionStore } from "../store/rolePermission.store";
import rolePermissionService from "../services/rolePermission";
import { RolePermissionRequest } from "../types/rolePermissionTypes";

const useRolePermission = () => {
  // const setRolePermissions = useRolePermissionStore((state) => state.setRolePermissions);

  const createRolePermission = async (data: RolePermissionRequest) => {
    try {
      const response = await rolePermissionService.createRolePermission(data);
      if (response && response.status === 201) {
        // TODO: get role permissions
      } else {
        console.error("Failed to create role permission:", response);
      }
    } catch (error) {
      console.error("Error creating role permission:", error);
    }
  };

  return { createRolePermission };
};

export default useRolePermission;
