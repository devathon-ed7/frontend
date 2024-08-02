import api from "./api";
import { handleAxiosError } from "../utils/errorHelper";
import { ROLES_ENDPOINT } from "./apiConfig";

const getRoles = async () => {
  try {
    const response = await api.get(ROLES_ENDPOINT);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export default { getRoles };
