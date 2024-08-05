import api from "./api";
import { handleAxiosError } from "../utils/errorHelper";
import { ROLE_PERMISSION_ENDPOINT } from "./apiConfig";
import { RolePermissionRequest } from "../types/rolePermissionTypes";

const createRolePermission = async (data: RolePermissionRequest) => {
  try {
    const response = await api.post(ROLE_PERMISSION_ENDPOINT, data);
    return response;
  } catch (error) {
    handleAxiosError(error);
  }
};

const getPermissionsforRole = async (roleId: string) => {
  try {
    const response = await api.get(`${ROLE_PERMISSION_ENDPOINT}/${roleId}`);
    return response;
  } catch (error) {
    handleAxiosError(error);
  }
};

export default { createRolePermission, getPermissionsforRole };
