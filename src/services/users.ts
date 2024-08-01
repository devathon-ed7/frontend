import api from "./api";
import { handleAxiosError } from "../utils/errorHelper";
import { USERS_ENDPOINT } from "./apiConfig";

const getUsers = async () => {
  try {
    const response = await api.get(USERS_ENDPOINT);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export default { getUsers };
