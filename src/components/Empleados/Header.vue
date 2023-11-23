<script setup lang="ts">
import useLogin from "../../composables/useLogin";
const { user } = useLogin();
const { userAvatarFromName } = useLogin();
</script>
<template>
  <div
    class="flex items-center justify-end h-[96px] bg-white w-full border-l-0 border-2 border-gray-200 px-8 gap-2 sticky top-0"
  >
    <div class="text-white bg-[#eb6f25] rounded-full p-3">
      {{ userAvatarFromName }}
    </div>
    <p class="text-sm font-bold">{{ user.nombre }}</p>
  </div>
</template>
<style lang="postcss" scoped>
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
