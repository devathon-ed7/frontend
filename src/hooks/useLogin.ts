import { useLoginStore } from "../store/login.store";
import loginService from "../services/login";
import { Credentials } from "../types/apiTypes";

const useLogin = () => {
  const setToken = useLoginStore((state) => state.setToken);

  const login = async (credentials: Credentials): Promise<void> => {
    const response = await loginService.login({
      username: credentials.username,
      password: credentials.password,
    });
    //typescript complains about response.token being undefined
    const { token } = response.data;
    setToken(token);
  };

  const logout = () => {
    setToken("");
  };

  return { login, logout };
};

export default useLogin;
