import { useLoginStore } from "../store/login.store";
import loginService from "../services/login";
import { Credentials } from "../types/api.types";

const useLogin = () => {
  const setToken = useLoginStore((state) => state.setToken);
  const setStatus = useLoginStore((state) => state.setStatus);

  const login = async (credentials: Credentials): Promise<void> => {
    const response = await loginService.login({
      username: credentials.username,
      password: credentials.password,
    });
    //typescript complains about response.token being undefined
    const { token } = response.data;
    setToken(token);
    setStatus("Authorized");
  };

  const logout = () => {
    setToken("");
    setStatus("Unauthorized");
  };

  return { login, logout };
};

export default useLogin;
