import { Empleado } from "./../interaces/IEmpleados";
import http from "../utils/http-conector";
import type { Ref } from "vue";
import { ref } from "vue";
const empleados: Ref<Empleado[]> = ref([]);
const loading = ref(true);
const useEmpleados = () => {
  const getEmpleados = async () => {
    try {
      loading.value = true;
      const { data } = await http.get("/empleados?limit=10&page=4");
      const datos: Empleado[] = data.data;
      empleados.value = datos;
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };
  return { getEmpleados, empleados, loading };
};
export default useEmpleados;
