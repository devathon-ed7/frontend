import { usePermissionsStore } from "../store/permissions.store";
import permissionsService from "../services/permissions";
import { PermissionRequest } from "../types";

const usePermissions = () => {
  const setPermissions = usePermissionsStore((state) => state.setPermissions);

  const getPermissions = async () => {
    const response = await permissionsService.getPermissions();
    if (response) {
      setPermissions(response.data);
    }
  };

  const createPermission = async (data: PermissionRequest) => {
    const response = await permissionsService.createPermission(data);
    if (response.status === 201) {
      getPermissions();
    }
  };
  return { getPermissions, createPermission };
};

export default usePermissions;
