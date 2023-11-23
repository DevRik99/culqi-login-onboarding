<template>
  <div class="grid w-full h-full grid-cols-2">
    <div class="flex flex-col">
      <img
        src="./../assets/img/login.png"
        alt="Login Img"
        class="w-full h-full max-h-[calc(100vh-350px)] object-cover object-center"
      />
      <div class="w-full h-[350px] bg-[#111827] p-[50px] text-white">
        <img src="./../assets/img/logo_white.svg" alt="Culqi Logo" />
        <h1 class="text-5xl font-bold my-9">Dale más power ⚡ a tus empleados hoy 💪</h1>
        <h2 class="text-lg">Te ayudamos a gestionarlos de manera más sencilla</h2>
      </div>
    </div>
    <div class="grid bg-white place-content-center">
      <form class="w-[480px] h-[405px]" @submit.prevent="handleLogin">
        <p class="pb-5 text-xl font-bold text-center">Inicia sesión</p>
        <label for="email" class="block text-sm font-medium"
          >Correo electrónico <span class="text-red-500">*</span></label
        >
        <div class="mt-2 mb-7">
          <div
            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#49c388]"
          >
            <input
              type="email"
              name="email"
              required
              v-model="email"
              autocomplete="email"
              class="flex-1 block p-4 text-gray-900 bg-transparent border-0 placeholder:text-gray-400 focus:ring-0"
              placeholder="Ingresa el correo electrónico"
            />
          </div>
        </div>
        <label for="password" class="block text-sm font-medium"
          >Contraseña <span class="text-red-500">*</span></label
        >
        <div class="mt-2 mb-7">
          <div
            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#49c388]"
          >
            <input
              type="password"
              name="password"
              v-model="password"
              autocomplete="password"
              class="flex-1 block p-4 text-gray-900 bg-transparent border-0 placeholder:text-gray-400 focus:ring-0"
              placeholder="Ingresa la contraseña"
            />
          </div>
        </div>
        <button
          class="p-5 mb-5 bg-[#111827] text-white text-center font-bold rounded-xl w-full"
          type="submit"
        >
          Iniciar sesión
        </button>
        <p class="text-center text-gray-400">
          ¿Eres nuevo aquí?
          <router-link to="/" class="text-green-500">Crea una cuenta</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useLogin from "./../composables/useLogin";
const { login } = useLogin();
const password = ref("");
const email = ref("");
const handleLogin = () => {
  login(email.value, password.value);
};
</script>
