<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type Subject from '@/interfaces/Subject'
import { defaultSubjectColors, storageSubjectColor } from '@/logic'

const subjectDemo: Subject = {
  subjectCode: '841058',
  subjectName: 'Hệ điều hành mã nguồn mở',
  subjectGroup: '02',
  numberOfCredits: '3',
  classCode: 'DCT1212, DCT1212',
  creditsForTuitionFee: '3',
  notAllowedToRegister: '',
  practiceSession: '01',
  dayOfWeek: 1,
  startingPeriod: 1,
  numberOfPeriods: 3,
  room: 'C.E403',
  lecturer: '11364',
  weeks: {
    start: 1675616400000,
    end: 1684602000000,
  },
}

const resetColor = () => {
  // eslint-disable-next-line no-alert
  if (confirm('Do you want to reset config color?')) {
    storageSubjectColor.value = defaultSubjectColors
    location.reload()
  }
}
</script>

<template>
  <div class="min-h-screen p-10">
    <h1 class="font-bold text-2xl text-center">
      Color Picker
      <button class="flex-inline items-center justify-center w-8 h-8 mr-4 text-white bg-[#5cbfdd] rounded-full duration-300 hover:shadow-lg hover:scale-105" @click="resetColor">
        <Icon icon="system-uicons:reset-alt" />
      </button>
    </h1>
    <div class="grid grid-cols-2 gap-x-[10px] p-5">
      <div v-for="(subjectColor, index) in storageSubjectColor" :key="`color${index}`">
        <div>Color: {{ index }}</div>
        <input v-model="subjectColor.primary" type="color">
        <input v-model="subjectColor.secondary" type="color">
        <input v-model="subjectColor.tertiary" type="color">
        <div class="grid grid-cols-1 grid-rows-3">
          <SubjectCell :subject="{ ...subjectDemo, color: index }" />
        </div>
        <div />
      </div>
    </div>
  </div>
</template>
