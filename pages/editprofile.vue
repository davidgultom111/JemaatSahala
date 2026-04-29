<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
</script>

<template>
  <div>
    <NavbarApp />
    <div class="flex justify-center py-10 px-4">
      <EditProfile />
    </div>
    <FooterLogin />
  </div>
</template>
