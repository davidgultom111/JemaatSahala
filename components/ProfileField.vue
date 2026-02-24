<template>
  <div class="border-b border-neutral-100 pb-2 font-sans">
    <p class="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">{{ label }}</p>
    <p class="text-sm text-neutral-800 mt-1 font-medium">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: String
});
</script>