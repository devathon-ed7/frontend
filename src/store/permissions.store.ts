import { devtools, persist } from "zustand/middleware";
import { Permission } from "../types/permissions.types";
import { create, StateCreator } from "zustand";
import { customSessionStorage } from "./session.store";

interface PermissionStore {
  permissions: Permission[];
  setPermissions: (value: Permission[]) => void;
  setPermissionById: (id: number) => void;
}

const permissionApi: StateCreator<PermissionStore, [["zustand/persist", unknown]]> = (set) => ({
  permissions: [],
  setPermissions: (value: Permission[]) => set({ permissions: value }, false, "SET_PERMISSIONS"),
  setPermissionById: (id: number) => {
    set(
      (state) => ({
        permissions: state.permissions.map((permission) =>
          permission.id === id ? { ...permission, active: !permission.active } : permission,
        ),
      }),
      false,
      "SET_PERMISSION_BY_ID",
    );
  },
});

export const usePermissionsStore = create<PermissionStore>()(
  devtools(
    persist(permissionApi, {
      name: "inventory-manager",
      storage: customSessionStorage,
    }),
  ),
);
