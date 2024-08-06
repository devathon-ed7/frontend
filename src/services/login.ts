import api from "./api";
import { handleAxiosError } from "../utils/errorHelper";
import { LOGIN_ENDPOINT } from "./apiConfig";
import { Credentials } from "../types/api.types";

const login = async (credentials: Credentials) => {
  try {
    const response = await api.post(LOGIN_ENDPOINT, { ...credentials });
    return response;
  } catch (err) {
    handleAxiosError(err);
  }
};

export default { login };
