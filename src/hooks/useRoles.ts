import { useRolesStore } from "../store/roles.store";
import rolesService from "../services/roles";
import { RoleRequest } from "../types";

const useRoles = () => {
  const setRoles = useRolesStore((state) => state.setRoles);

  const getRoles = async (): Promise<void> => {
    const response = await rolesService.getRoles();

    if (response) {
      setRoles(response.data);
    }
  };

  const createRole = async (data: RoleRequest) => {
    const response = await rolesService.createRole(data);

    if (response.status === 201) {
      getRoles();
    }
  };
  return { getRoles, createRole };
};

export default useRoles;
