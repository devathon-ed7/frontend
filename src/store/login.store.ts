import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "./session.store";

interface LoginStore {
  token: string | null;
  setToken: (value: string) => void;
}

const loginApi: StateCreator<LoginStore, [["zustand/devtools", never]]> = (set) => ({
  token: null,
  setToken: (value: string) => set({ token: value }, false, "SET_TOKEN"),
});

export const useLoginStore = create<LoginStore>()(
  persist(loginApi, {
    name: "inventory-manager-login",
    storage: customSessionStorage,
  }),
);
