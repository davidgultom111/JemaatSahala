<template>
  <div class="min-h-screen flex flex-col bg-[#00334e]">
    <NavbarLogin />
    <LoginForm class="flex-1" />
    <FooterLogin />
  </div>
</template>

<script setup>
import NavbarLogin from "~/components/NavbarLogin.vue";
import LoginForm from "~/components/LoginForm.vue";
</script>
