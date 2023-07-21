<script setup lang="ts">
import ScheduleTable from '@/components/ScheduleTable.vue'

const openColorPicker = ref(false)
</script>

<template>
  <main>
    <div v-if="openColorPicker" class="fixed top-0 bottom-0 left-0 right-0" />
    <ScheduleTable />
    <ColorPicker />
  </main>
</template>
