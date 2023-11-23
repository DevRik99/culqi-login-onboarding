<script setup lang="ts">
import useLogin from "../composables/useLogin";
const { logout } = useLogin();
</script>

<template>
  <div
    class="p-5 h-screen w-[280px] bg-white flex flex-col justify-between border-r-2 border border-gray-200 fixed top-0 z-10"
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
      @click="logout"
    >
      Salir
    </button>
  </div>
</template>
