import api from "./api";
import { handleAxiosError } from "../utils/errorHelper";
import { LOGIN_ENDPOINT } from "./apiConfig";
import { Login } from "../types/apiType";

const login = async (credentials: Login) => {
  try {
    const response = await api.post(LOGIN_ENDPOINT, { ...credentials });
    return response;
  } catch (err) {
    handleAxiosError(err);
  }
};

export default { login };
