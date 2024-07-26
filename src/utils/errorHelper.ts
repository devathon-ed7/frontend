import { AxiosError } from "axios";

export const handleAxiosError = (err: unknown): never => {
  if (err instanceof AxiosError) {
    throw new Error(err.response?.data.error || "An unexpected error occurred.");
  } else {
    throw new Error("An unexpected error occurred.");
  }
};
