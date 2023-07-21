<script setup lang="ts">
import type Subject from '@/interfaces/Subject'

defineProps<{ subject: Subject }>()
</script>

<template>
  <div
    class="shadow-sm bg-white flex items-center justify-center border-l duration-500 hover:shadow-lg hover:scale-[1.02]"
    :style="{
      gridColumn: subject.dayOfWeek,
      gridRow: `${subject.startingPeriod + 1} / span ${subject.numberOfPeriods}`,
      color: `var(--primary-color--${subject.color})`,
      borderColor: `var(--secondary-color--${subject.color})`,
      backgroundColor: `var(--tertiary-color--${subject.color})`,
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
