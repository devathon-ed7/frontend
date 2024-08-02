import { useEffect, useState } from "react";
import rolesService from "../../services/roles";
import "./RolesView.css";
import { Link } from "react-router-dom";

export const RolesView = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      const response = await rolesService.getRoles();
      setRoles(response);
    };
    fetchRoles();
  }, []);
  return (
    <div className="flex h-full flex-col">
      <div className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-neutral-200 p-4">
        <h1>Roles</h1>
        <div>
          <Link to="create" className="rounded-md bg-blue-500 px-2 py-2 text-sm text-white">
            + Nuevo
          </Link>
        </div>
      </div>
      <h2 className="mx-8 mt-8">Standard roles</h2>
      <div className="flex h-full w-full flex-wrap p-8">
        {roles.map((role) => (
          <div
            key={role.id}
            className="m-4 flex h-16 w-full flex-col rounded-lg border-neutral-200 p-4 shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg">{role.name}</h2>
              </div>
              <span className="ellipsis-icon"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
