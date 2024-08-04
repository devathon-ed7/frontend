import { useRolesStore } from "../store/roles.store";
import rolesService from "../services/roles";
import { RolesResponse } from "../types/rolesTypes";

const useRoles = () => {
  const setRoles = useRolesStore((state) => state.setRoles);

  const getRoles = async (): RolesResponse => {
    const response = await rolesService.getRoles();
    const { roles } = response;
    setRoles(roles);
  };
  return { getRoles };
};
