<template>
  <div class="w-screen h-screen bg-[#fafafa] grid grid-cols-[280px_1fr]">
    <div
      class="p-5 h-screen w-[280px] bg-white flex flex-col justify-between border-r-2 border border-gray-200"
    >
      <div class="">
        <img src="./../assets/img/logo_black.svg" class="mx-auto my-5" alt="Culqi Logo" />
        <ul>
          <li class="font-bold text-sm text-[#00A19B] my-5">
            <i class="bx bx-user"></i>Empleados
          </li>
          <li class="font-bold text-sm hover:text-[#00A19B] my-5">
            <i class="bx bx-shopping-bag"></i>Reclutamiento
          </li>
        </ul>
      </div>
      <button
        class="font-bold text-center text-black border w-[216px] h-[48px] border-black rounded-lg"
      >
        Salir
      </button>
    </div>
    <div class="grid grid-rows-[96px_1fr] gap-5">
      <div
        class="flex items-center justify-end h-[96px] bg-white w-full border-l-0 border-2 border-gray-200 px-5 gap-2"
      >
        <div class="text-white bg-[#eb6f25] rounded-full p-3">CQ</div>
        <p class="text-sm font-bold">Christian Quispe</p>
      </div>
      <div class="p-5">
        <div class="w-full p-8 bg-white rounded shadow-sm h-min">
          <header class="grid grid-flow-row grid-cols-1 gap-y-3">
            <div class="flex items-center justify-between w-full">
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
            </div>

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
                  <tr>
                    <td>
                      <p class="font-bold">Pristia Candra</p>
                      <span class="text-gray-400">lincoln@unpixel.com</span>
                    </td>
                    <td>UI UX Designer</td>
                    <td>Team Product</td>
                    <td>Unpixel Office</td>
                    <td>Activada</td>
                    <td class="flex items-center justify-end gap-3">
                      <button
                        class="w-[34px] h-[34px] text-white bg-[#27a376] rounded-lg"
                      >
                        <i class="bx bx-show"></i>
                      </button>
                      <button
                        class="w-[34px] h-[34px] text-white bg-[#2f78ee] rounded-lg"
                      >
                        <i class="bx bx-edit-alt"></i>
                      </button>
                      <button
                        class="w-[34px] h-[34px] text-white bg-[#e03137] rounded-lg"
                      >
                        <i class="bx bx-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </header>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
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
</style>
