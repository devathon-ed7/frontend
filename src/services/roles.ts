import api from "./api";
import { handleAxiosError } from "../utils/errorHelper";
import { ROLES_ENDPOINT } from "./apiConfig";
import { RolesResponse, RoleRequest } from "../types";

const getRoles = async () => {
  try {
    const response = await api.get<RolesResponse>(ROLES_ENDPOINT);
    return response;
  } catch (error) {
    handleAxiosError(error);
  }
};

const createRole = async (data: RoleRequest) => {
  try {
    const response = await api.post(ROLES_ENDPOINT, data);
    return response;
  } catch (error) {
    handleAxiosError(error);
  }
};

export default { getRoles, createRole };
