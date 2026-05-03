<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col">
    <NavbarApp />
    <Surat class="flex-1" />
    <FooterLogin />
  </div>
</template>
