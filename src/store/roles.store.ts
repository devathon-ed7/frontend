import { create, StateCreator } from "zustand";
import { customSessionStorage } from "./session.store";
import { devtools, persist } from "zustand/middleware";

interface RolesStore {
  roles: [];
}

const roleApi: StateCreator<RolesStore, [["zustand/persist", never]]> = (set) => ({
  roles: [],
});

export const useRolesStore = create<RolesStore>()(
  devtools(
    persist(roleApi, {
      name: "inventory-manager",
      storage: customSessionStorage,
    }),
  ),
);
