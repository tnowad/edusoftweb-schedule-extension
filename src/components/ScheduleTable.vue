<script setup lang="ts">
import { Icon } from '@iconify/vue'
import html2canvas from 'html2canvas'
import SubjectTable from './SubjectTable.vue'
import { storageSchedule } from '@/logic'
import { formatDate } from '@/utils/dateUtils'
import { filterSubjectsByWeakOfDay } from '@/utils/subjectUtils'

const subjects = ref(filterSubjectsByWeakOfDay(storageSchedule.value, new Date()))
const dateShowing = ref(formatDate(new Date()))

function goToPreviousWeek() {
  const currentDate = new Date(dateShowing.value)
  currentDate.setDate(currentDate.getDate() - 7)
  dateShowing.value = formatDate(currentDate)
}

function goToNextWeek() {
  const currentDate = new Date(dateShowing.value)
  currentDate.setDate(currentDate.getDate() + 7)
  dateShowing.value = formatDate(currentDate)
}

watch([dateShowing], () => {
  subjects.value = filterSubjectsByWeakOfDay(storageSchedule.value, new Date(dateShowing.value))
})

function exportTableToImage() {
  const tableContainer = document.querySelector('#subject-table-container > div')
  if (tableContainer) {
    html2canvas(tableContainer as HTMLElement).then((canvas) => {
      const image = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.download = 'subject_table.png'
      link.href = image
      link.click()
    })
  }
}
</script>

<template>
  <div class="flex items-center justify-center w-full h-[100vh] flex-col bg-slate-50">
    <div class="flex items-center justify-center mb-8">
      <button
        className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-[#5cbfdd] rounded-full duration-300 hover:shadow-lg hover:scale-105"
        @click="goToPreviousWeek"
      >
        <Icon icon="mdi:less-than" class="text-2xl" />
      </button>
      <input v-model="dateShowing" type="date" class="bg-transparent outline-none mx-3">
      <button
        className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-[#5cbfdd] rounded-full duration-300 hover:shadow-lg hover:scale-105"
        @click="goToNextWeek"
      >
        <Icon icon="mdi:greater-than" class="text-2xl" />
      </button>
      <button
        class="flex items-center justify-center w-8 h-8 mr-4 text-white bg-[#5cbfdd] rounded-full duration-300 hover:shadow-lg hover:scale-105"
        @click="exportTableToImage"
      >
        <Icon icon="mdi:download" class="text-2xl" />
      </button>
    </div>
    <SubjectTable id="subject-table-container" class="bg-slate-50" :subjects="subjects" />
  </div>
</template>
