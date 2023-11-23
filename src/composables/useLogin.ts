import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import http from "../utils/http-conector";
const user = computed(() => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;
});
const userAvatarFromName = computed(() => {
  const initials = user?.value?.nombre?.match(/\b\w/g) || [];
  return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
});
const loading = ref(false);
const error = ref(false);
const useLogin = () => {
  const router = useRouter();
  const login = async (correo: string, password: string) => {
    try {
      loading.value = true;
      const {
        data: { data },
      } = await http.post("auth/login", {
        correo,
        password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      http.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      error.value = false;
      router.push("/empleados");
      return data;
    } catch (errorLogin: any) {
      console.log(errorLogin);
      if (errorLogin.response.status === 401) {
        setTimeout(() => {
          error.value = true;
        }, 500);
      }
    } finally {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    }
  };
  const logout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      delete http.defaults.headers.common["Authorization"];
      router.push("/login");
      return true;
    } catch (error) {
      console.log(error);
    }
  };
  return { login, logout, user, userAvatarFromName, loading, error };
};
export default useLogin;
