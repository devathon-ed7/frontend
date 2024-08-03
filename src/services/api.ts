import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useLoginStore } from "../store/login.store";

interface ApiConfig {
  baseUrl: string;
  headers: Record<string, string>;
}

const params: ApiConfig = {
  baseUrl:
    import.meta.env.VITE_NODE_ENV === "development" ? import.meta.env.VITE_BACKEND_SERVER : "/",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosConfig: AxiosRequestConfig = {
  baseURL: params.baseUrl,
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);
const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) => axios.get<T>(url, config),

    post: <T>(url: string, data: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, data, config),

    put: <T>(url: string, data: unknown, config: AxiosRequestConfig = {}) =>
      axios.put<T>(url, data, config),

    patch: <T>(url: string, data: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, data, config),

    delete: <T>(url: string, config: AxiosRequestConfig = {}) => axios.delete<T>(url, config),
  };
};

axiosInstance.interceptors.request.use((config) => {
  const token = useLoginStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api(axiosInstance);
