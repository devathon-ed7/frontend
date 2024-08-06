import { create, StateCreator } from "zustand";
import { customSessionStorage } from "./session.store";
import { devtools, persist } from "zustand/middleware";
import { Role } from "../types/roles.types";

interface RolesStore {
  roles: Role[];
  setRoles: (value: Role[]) => void;
  getRolById: (id: number) => Role | undefined;
}

const roleApi: StateCreator<RolesStore, [["zustand/persist", unknown]]> = (set, get) => ({
  roles: [],
  setRoles: (value: Role[]) => set({ roles: value }, false, "SET_ROLES"),
  getRolById: (id: number) => get().roles.find((role) => role.id === id),
});

export const useRolesStore = create<RolesStore>()(
  devtools(
    persist(roleApi, {
      name: "inventory-manager",
      storage: customSessionStorage,
    }),
  ),
);
