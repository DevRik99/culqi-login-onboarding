<template>
  <div>
    <div class="sticky top-0 right-0 z-20 p-2 bg-red-400" v-if="showAlertOnlyDesktop">
      <p class="flex items-center justify-center gap-3 font-bold text-center text-white">
        Solo versión de escritorio

        <button @click="showAlertOnlyDesktop = !showAlertOnlyDesktop" class="text-white">
          <i class="bx bx-x"></i>
        </button>
      </p>
    </div>
    <RouterView class="relative h-screen" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const showAlertOnlyDesktop = ref(true);
</script>
