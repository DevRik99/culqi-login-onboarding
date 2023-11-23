import { Empleado } from "./../interaces/IEmpleados";
import http from "../utils/http-conector";
import type { Ref } from "vue";
import { ref, watch } from "vue";
const empleados: Ref<Empleado[]> = ref([]);
const loading = ref(true);
const page = ref(1);
const maxPage = ref(1);
const total = ref(0);
const limit = ref(10);
// watch page and reload empleados

const useEmpleados = () => {
  const getEmpleados = async () => {
    try {
      loading.value = true;
      window?.scrollTo(0, 0);
      const { data } = await http.get(
        `/empleados?limit=${limit.value}&page=${page.value}`
      );
      total.value = data.total;
      maxPage.value = Math.ceil(total.value / limit.value);
      const datos: Empleado[] = data.data;
      empleados.value = datos;

      return data;
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 403) {
        localStorage.removeItem("token");
        delete http.defaults.headers.common["Authorization"];
        window.location.href = "/login";
      }
    } finally {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    }
  };
  watch(page, async () => {
    await getEmpleados();
  });
  return { getEmpleados, empleados, loading, page, maxPage, total, limit };
};
export default useEmpleados;
