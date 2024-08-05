import { devtools, persist } from "zustand/middleware";
import { RolePermission } from "../types/rolePermissionTypes";
import { create, StateCreator } from "zustand";
import { customSessionStorage } from "./session.store";

interface RolePermissionStore {
  rolePermissions: RolePermission[];
  setRolePermissions: (value: RolePermission[]) => void;
  getPermissionsforRole: (role_id: number) => void;
}

const rolePermissionApi: StateCreator<RolePermissionStore, [["zustand/persist", unknown]]> = (
  set,
  get,
) => ({
  rolePermissions: [],
  setRolePermissions: (value: RolePermission[]) =>
    set({ rolePermissions: value }, false, "SET_ROLE_PERMISSION"),
  getPermissionsforRole: (role_id: number) => {
    get().rolePermissions.forEach((rolePermission) => {
      console.log(rolePermission);
      if (rolePermission.role_id === role_id) {
        console.log(rolePermission);
      }
    });
  },
});

export const useRolePermissionStore = create<RolePermissionStore>()(
  devtools(
    persist(rolePermissionApi, {
      name: "inventory-manager",
      storage: customSessionStorage,
    }),
  ),
);
