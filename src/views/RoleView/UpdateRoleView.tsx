import { useParams } from "react-router-dom";
import { BackTo } from "../../components/BackTo/BackTo";
import { useRolesStore } from "../../store/roles.store";
import { usePermissionsStore } from "../../store/permissions.store";
import { Switcher } from "../../components/Switcher/Switcher";

export const UpdateRoleView = () => {
  const { id } = useParams();
  const role = useRolesStore((state) => state.getRolById(Number(id)));
  const permissions = usePermissionsStore((state) => state.permissions);
  const setPermissionById = usePermissionsStore((state) => state.setPermissionById);

  const handleCheckboxChange = (id: number) => () => {
    setPermissionById(id);
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
                isChecked={permission.active}
                onCheckboxChange={handleCheckboxChange(permission.id)}
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
        </button>
        <button className="btn-secondary" onClick={() => setData({ name: "", description: "" })}>
          Cancel
        </button>
      </div>
    </div>
  );
};
