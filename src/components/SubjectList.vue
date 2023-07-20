<script setup lang="ts">
import type Subject from '@/interfaces/Subject'
import { getPeriodTime } from '@/utils/periodUtils'

defineProps<{ subjects: Subject[] }>()
</script>

<template>
  <div>
    <ul v-if="subjects.length > 0" class="space-y-4">
      <li v-for="(subject, index) in subjects" :key="index">
        <div class="px-4 py-3 transition-shadow duration-500 bg-white rounded-lg shadow-md hover:shadow-lg">
          <div class="flex items-center justify-between">
            <div class="font-bold w-[200px]">
              {{ subject.subjectName }}
            </div>
            <div class="min-w-[50px]">
              {{ subject.room }}
            </div>
            <div class="min-w-[100px]">
              {{ getPeriodTime(subject.startingPeriod).start }} -
              {{ getPeriodTime(subject.startingPeriod + subject.numberOfPeriods - 1).end }}
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul v-else>
      <div class="px-4 py-3 transition-shadow duration-500 bg-white rounded-lg shadow-md hover:shadow-lg">
        <div class="flex items-center justify-between">
          <div class="font-bold">
            "You don't have any subject today!!! 😍"
          </div>
          <div class="italic">
            -
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>
