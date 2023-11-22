<template>
  <div class="w-screen h-screen bg-[#fafafa] grid grid-cols-[280px_1fr]">
    <div
      class="p-5 h-screen w-[280px] bg-white flex flex-col justify-between border-r-2 border border-gray-200"
    >
      <div class="">
        <img src="./../assets/img/logo_black.svg" class="mx-auto my-5" alt="Culqi Logo" />
        <ul>
          <li class="font-bold text-sm text-[#00A19B] my-5">Empleados</li>
          <li class="font-bold text-sm hover:text-[#00A19B] my-5">Reclutamiento</li>
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
      <div class="">
        <skeletor width="50%"></skeletor>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
