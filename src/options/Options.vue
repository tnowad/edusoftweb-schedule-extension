<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ScheduleTable from '@/components/ScheduleTable.vue'
import ColorPicker from '@/components/ColorPicker.vue'

const activeTab = ref('schedule')
const showSettings = ref(false)

const toggleSettings = () => {
  showSettings.value = !showSettings.value
}
</script>

<template>
  <main class="bg-slate-50">
    <div class="fixed bottom-0 right-0">
      <button class="rounded-full bg-[#5cbfdd] text-white text-4xl p-2 m-4" @click="toggleSettings">
        <Icon icon="icon-park-outline:config" />
      </button>
    </div>
    <div v-if="showSettings" class="fixed bottom-16 right-4 bg-white rounded-lg shadow-md p-4">
      <p>Tab</p>
      <div>
        <button
          :class="{ 'bg-[#5cbfdd]': activeTab === 'schedule', 'bg-gray-300': activeTab !== 'schedule' }"
          class="px-4 py-2 mr-4 text-white rounded-md"
          @click="activeTab = 'schedule'"
        >
          Schedule
        </button>
        <button
          :class="{ 'bg-[#5cbfdd]': activeTab === 'colorPicker', 'bg-gray-300': activeTab !== 'colorPicker' }"
          class="px-4 py-2 text-white rounded-md"
          @click="activeTab = 'colorPicker'"
        >
          Color Picker
        </button>
      </div>
    </div>

    <div v-if="activeTab === 'schedule'">
      <ScheduleTable />
    </div>
    <div v-else-if="activeTab === 'colorPicker'">
      <ColorPicker />
    </div>
  </main>
</template>
