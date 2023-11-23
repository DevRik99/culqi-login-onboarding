<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import HeaderEmpleados from "../components/Empleados/Header.vue";
import TablaEmpleados from "../components/Empleados/Tabla.vue";
</script>
<template>
  <div class="w-screen h-screen bg-[#fafafa] flex">
    <Sidebar />
    <div class="pl-[280px] w-full">
      <div class="grid grid-rows-[96px_1fr] gap-3">
        <HeaderEmpleados />
        <div class="p-5">
          <TablaEmpleados />
        </div>
      </div>
    </div>
  </div>
</template>
