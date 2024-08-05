import api from "./api";
import { handleAxiosError } from "../utils/errorHelper";
import { PERMISSIONS_ENDPOINT } from "./apiConfig";
import { PermissionRequest } from "../types";

const getPermissions = async () => {
  try {
    const response = await api.get(PERMISSIONS_ENDPOINT);
    return response;
  } catch (error) {
    handleAxiosError(error);
  }
};

const createPermission = async (data: PermissionRequest) => {
  try {
    const response = await api.post(PERMISSIONS_ENDPOINT, data);
    return response;
  } catch (error) {
    handleAxiosError(error);
  }
};

export default { getPermissions, createPermission };
