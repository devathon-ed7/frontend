/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import { BackTo } from "../../components/BackTo/BackTo";
import { Switcher } from "../../components/Switcher/Switcher";
//store
import { useRolesStore } from "../../store/roles.store";
import { usePermissionsStore } from "../../store/permissions.store";
import { useRolePermissionStore } from "../../store/rolePermission.store";
//hooks
import useRolePermission from "../../hooks/useRolePermission";
import usePermissions from "../../hooks/usePermissions";
import { RolePermission, RolePermissionRequest } from "../../types";
import rolePermission from "../../services/rolePermission";

export const UpdateRoleView = () => {
  const { id } = useParams();
  //roles
  const role = useRolesStore(useShallow((state) => state.getRolById(Number(id))));
  //permissions
  const permissions = usePermissionsStore((state) => state.permissions);
  const setPermissionById = usePermissionsStore((state) => state.setPermissionById);
  //role permissions
  const rolePermissions = useRolePermissionStore(useShallow((state) => state.rolePermissions));
  const setRolePermission = useRolePermissionStore((state) => state.setRolePermission);
  //hook
  const { getPermissionForRole, createRolePermission } = useRolePermission();
  const { getPermissions } = usePermissions();

  useEffect(() => {
    const fetchPermissions = async () => {
      await getPermissions();
    };
    if (permissions.length === 0) {
      fetchPermissions();
    }
  }, []);

  useEffect(() => {
    const fetchRolePermissions = async () => {
      await getPermissionForRole(Number(id));
    };
    fetchRolePermissions();
  }, []);

  const handlePermissionChange = (id: number) => {
    setPermissionById(id);
  };

  const handleUpdateRole = async () => {
    const payload: RolePermission[] = permissions.map((permission) => ({
      role_id: Number(id),
      permission_id: permission.id,
      active: permission.active,
    }));

    setRolePermission(payload);
    await createRolePermission(payload);
  };

  return (
    <div className="container-with-actions">
      <div className="px-8 pt-8">
        <BackTo>Roles</BackTo>
      </div>
      {/** content */}
      <div className="flex-auto px-8">
        <h1 className="text-3xl">Actualizar rol</h1>
        <h2 className="mt-8">Permisos</h2>

        {/* permission list */}

        {permissions.map((permission) => (
          <div
            key={permission.id}
            className="m-4 flex h-16 w-full flex-col rounded-lg border-neutral-200 p-4 shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg">{permission.name}</h2>
              </div>

              <Switcher
                isChecked={permission.active !== undefined ? permission.active : false}
                onCheckboxChange={() => handlePermissionChange(permission.id)}
              />
            </div>
          </div>
        ))}

        <pre>{JSON.stringify(role, null, 2)}</pre>
        <pre>{JSON.stringify(permissions, null, 2)}</pre>
      </div>
      {/** actions */}
      <div className="mt-auto flex items-center space-x-2 border-t border-neutral-200 p-4">
        <button className="btn-primary" onClick={() => handleUpdateRole()}>
          Save
        </button> {/*}
        <button className="btn-secondary" onClick={() => setData({ name: "", description: "" })}>
          Cancel
        </button> */}
      </div> 
    </div>
  );
};
