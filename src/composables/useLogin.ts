import { useRouter } from "vue-router";
import http from "../utils/http-conector";
const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")!)
  : null;
const useLogin = () => {
  const router = useRouter();
  const login = async (correo: string, password: string) => {
    try {
      const {
        data: { data },
      } = await http.post("auth/login", {
        correo,
        password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/empleados");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      const { data } = await http.post("/logout");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { login, logout, user };
};
export default useLogin;
