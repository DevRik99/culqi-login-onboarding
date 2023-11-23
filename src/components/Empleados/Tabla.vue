<script setup lang="ts">
import useEmpleados from "./../../composables/useEmpleados";
import { onMounted } from "vue";
const { getEmpleados, empleados, page, maxPage, total, limit, loading } = useEmpleados();
onMounted(async () => {
  await getEmpleados();
});
</script>
<template>
  <div class="w-[99%] mx-auto p-8 bg-white rounded shadow-lg h-min">
    <div class="grid grid-flow-row grid-cols-1 gap-y-3">
      <template v-if="loading">
        <div class="flex items-center justify-center">
          <header class="flex flex-col items-start justify-start w-full gap-3">
            <div class="flex justify-between w-full">
              <p class="text-2xl font-bold">Empleados</p>
              <button
                class="font-bold text-center text-black h-[56px] w-[120px] rounded-lg"
              >
                <skeletor class="w-full h-full rounded-lg"></skeletor>
              </button>
            </div>
            <div class="relative grid w-full grid-cols-3 gap-5">
              <button class="font-bold text-center text-black h-[56px] rounded-lg">
                <skeletor class="w-full h-full rounded-lg"></skeletor>
              </button>
              <button class="font-bold text-center text-black h-[56px] rounded-lg">
                <skeletor class="w-full h-full rounded-lg"></skeletor>
              </button>
              <button class="font-bold text-center text-black h-[56px] rounded-lg">
                <skeletor class="w-full h-full rounded-lg"></skeletor>
              </button>
            </div>
          </header>
        </div>
        <div class="grid grid-cols-[1fr_315px] gap-x-4">
          <table class="table my-5 rounded table-auto col-span-full">
            <thead class="bg-[#fafafa] text-gray-500 rounded">
              <tr>
                <th v-for="item in 6" :key="item">
                  <div class="flex gap-3">
                    <button class="h-[20px] w-[20px] rounded-full">
                      <skeletor class="w-full h-full rounded-lg"></skeletor>
                    </button>
                    <button
                      class="font-bold text-center text-black h-[20px] w-[146px] rounded-lg"
                    >
                      <skeletor class="w-full h-full rounded-lg"></skeletor>
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in 10" :key="item">
                <td v-for="item2 in 6" :key="item2">
                  <div class="flex gap-3">
                    <button class="h-[20px] w-[20px] rounded-full">
                      <skeletor class="w-full h-full rounded-lg"></skeletor>
                    </button>
                    <button
                      class="font-bold text-center text-black h-[20px] w-[146px] rounded-lg"
                    >
                      <skeletor class="w-full h-full rounded-lg"></skeletor>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <template v-else>
        <header class="flex items-center justify-between w-full">
          <div class="">
            <p class="text-2xl font-bold">Empleados</p>
            <span class="text-gray-400">Gestiona tus empleados</span>
          </div>
          <div class="flex gap-4">
            <button
              class="font-bold text-center text-black border w-[150px] h-[56px] border-black rounded-lg"
            >
              <i class="bx bx-cloud-download"></i> Descargar
            </button>
            <button
              class="font-bold text-center text-white bg-[#111827] border w-[150px] h-[56px] border-black rounded-lg"
            >
              <i class="bx bx-plus"></i> Nuevo
            </button>
          </div>
        </header>
        <div class="grid grid-cols-[1fr_315px] gap-x-4">
          <div class="">
            <div
              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#49c388]"
            >
              <input
                type="text"
                name="text"
                autocomplete="text"
                class="flex-1 block p-4 text-gray-900 bg-transparent border-0 placeholder:text-gray-400 focus:ring-0"
                placeholder="Buscar empleado"
              />
            </div>
          </div>
          <div class="">
            <div class="w-full h-[56px]">
              <select
                name="cargo"
                autocomplete="cargo-name"
                class="rounded-md shadow-sm w-full ring-1 ring-inset p-4 ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#49c388]"
                placeholder="Nombre del cargo"
              >
                <option value="" selected disabled>Nombre del cargo</option>
                <option value="test">Cargo 1</option>
              </select>
            </div>
          </div>
          <table class="table my-5 rounded table-auto col-span-full">
            <thead class="bg-[#fafafa] text-gray-500 rounded">
              <tr>
                <th>Nombre</th>
                <th>Nombre cargo</th>
                <th>Departamento</th>
                <th>Oficina</th>
                <th>Cuenta</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="empleado of empleados" :key="empleado.id">
                <td>
                  <p class="font-bold">{{ empleado.nombre }}</p>
                  <span class="text-gray-400">{{ empleado.correo }}</span>
                </td>
                <td>{{ empleado.cargo }}</td>
                <td>{{ empleado.departamento }}</td>
                <td>{{ empleado.oficina }}</td>
                <td>{{ empleado.estadoCuenta }}</td>
                <td class="flex items-center justify-end gap-3">
                  <button class="w-[34px] h-[34px] text-white bg-[#27a376] rounded-lg">
                    <i class="bx bx-show"></i>
                  </button>
                  <button class="w-[34px] h-[34px] text-white bg-[#2f78ee] rounded-lg">
                    <i class="bx bx-edit-alt"></i>
                  </button>
                  <button class="w-[34px] h-[34px] text-white bg-[#e03137] rounded-lg">
                    <i class="bx bx-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <vue-awesome-paginate
                :total-items="total"
                :items-per-page="limit"
                :max-pages-shown="maxPage"
                v-model="page"
                :disablePagination="loading"
              />
            </tfoot>
          </table>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="postcss">
th,
td {
  @apply p-5 text-start;
}
th:last-child,
td:last-child {
  @apply p-5 text-end;
}
i {
  @apply mx-1;
}
button {
  @apply flex items-center justify-center;
}
button i {
  @apply text-xl;
}
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  @apply rounded-lg  ring-inset ring-[#f6f6f6] font-bold;
}
.active-page {
  @apply rounded-lg ring-0 ring-inset bg-[#f6f6f6];
}
.active-page:hover {
  @apply ring-1;
}
.next-button,
.back-button {
  @apply ring-1 border-[1px];
}
.paginate-buttons:hover {
  background-color: #f6f6f6;
}
.disabled-paginate-buttons {
  @apply opacity-50 cursor-not-allowed;
}
</style>
