import { devtools, persist } from "zustand/middleware";
import { RolePermission } from "../types/rolePermissionTypes";
import { create, StateCreator } from "zustand";
import { customSessionStorage } from "./session.store";

interface RolePermissionStore {
  rolePermissions: RolePermission[];
  setRolePermission: (value: RolePermission[]) => void;
}

const rolePermissionApi: StateCreator<RolePermissionStore, [["zustand/persist", unknown]]> = (
  set,
) => ({
  rolePermissions: [],
  setRolePermission: (value: RolePermission[]) =>
    set({ rolePermission: value }, false, "SET_ROLE_PERMISSION"),
});

export const useRolePermissionStore = create<RolePermissionStore>()(
  devtools(
    persist(rolePermissionApi, {
      name: "inventory-manager",
      storage: customSessionStorage,
    }),
  ),
);
