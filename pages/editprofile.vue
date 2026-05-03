<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col">
    <NavbarApp />
    <div class="flex-1 py-10 px-4">
      <EditProfile />
    </div>
    <FooterLogin />
  </div>
</template>
