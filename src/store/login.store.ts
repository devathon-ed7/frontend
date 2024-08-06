import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "./session.store";
import { Status } from "../types/user.types";

interface LoginStore {
  status: Status;
  token: string | null;
  setToken: (value: string) => void;
  setStatus: (value: Status) => void;
}

const loginApi: StateCreator<LoginStore, [["zustand/devtools", never]]> = (set) => ({
  token: null,
  status: "Unauthorized",
  setToken: (value: string) => set({ token: value }, false, "SET_TOKEN"),
  setStatus: (value: Status) => set({ status: value }, false, "SET_STATUS"),
});

export const useLoginStore = create<LoginStore>()(
  devtools(
    persist(loginApi, {
      name: "inventory-manager",
      storage: customSessionStorage,
    }),
  ),
);
