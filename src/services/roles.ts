import api from "./api";
import { handleAxiosError } from "../utils/errorHelper";
import { ROLES_ENDPOINT } from "./apiConfig";
import { RolesResponse } from "../types/rolesTypes";

const getRoles = async (): Promise<RolesResponse | undefined> => {
  try {
    const response = await api.get(ROLES_ENDPOINT);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export default { getRoles };
