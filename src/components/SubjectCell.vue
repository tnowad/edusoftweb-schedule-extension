<script setup lang="ts">
import type Subject from '@/interfaces/Subject'
import { storageSubjectColor } from '@/logic'

const { subject } = defineProps<{ subject: Subject }>()

const subjectColors = storageSubjectColor.value[subject.color!]
</script>

<template>
  <div
    class="shadow-sm bg-white flex items-center justify-center border-l duration-500 hover:shadow-lg hover:scale-[1.02]"
    :style="{
      gridColumn: subject.dayOfWeek,
      gridRow: `${subject.startingPeriod + 1} / span ${subject.numberOfPeriods}`,
      color: subjectColors.primary,
      borderColor: subjectColors.secondary,
      backgroundColor: subjectColors.tertiary,
    }"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="text-base font-bold text-center">
        {{ subject.subjectName }}
      </div>
      <div class="text-center">
        {{ subject.room }}
      </div>
      <div v-if="subject.practiceSession">
        Thực hành {{ subject.practiceSession }}
      </div>
    </div>
  </div>
</template>
