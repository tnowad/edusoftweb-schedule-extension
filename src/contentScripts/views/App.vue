<script setup lang="ts">
import '@/styles'
import { useToggle } from '@vueuse/core'
import logo from '@/assets/icon.svg'
import { assignColorsToSubjects, parseSubjectData } from '@/utils/subjectUtils'
import type Subject from '@/interfaces/Subject'

import { storageSchedule } from '@/logic'

const [show, toggle] = useToggle(false)

const getSubjects = (): Subject[] => {
  const trElements = Array.from(document.querySelectorAll('.body-table tr'))
  const data = trElements.map(trElement =>
    parseSubjectData(Array.from(trElement.querySelectorAll('td'))),
  )

  return assignColorsToSubjects(data)
}

const handleSaveSubject = () => {
  storageSchedule.value = getSubjects()
}
</script>

<template>
  <div
    v-if="show"
    class="fixed right-0 bottom-0 m-10 z-100 flex items-end font-sans select-none leading-1em animate-light-speed-in-left animate-repeat-1 animate-duration-150"
  >
    <div class="bg-white text-gray-800 rounded-lg shadow w-max h-min shadow-xl" p="x-4 y-2" m="y-auto r-2">
      <table class="table-auto border border-collapse">
        <caption class="text-xl font-bold p-2">
          Successfully Saved Subjects
        </caption>
        <thead aria-describedby="subject-table">
          <tr class="bg-blue-200">
            <th class="px-4 py-2">
              Subject Code
            </th>
            <th class="px-4 py-2">
              Subject Name
            </th>
            <th class="px-4 py-2">
              Subject Group
            </th>
            <th class="px-4 py-2">
              Practice Session
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="subject in storageSchedule" :key="subject.subjectCode" class="hover:bg-gray-100">
            <td class="border px-4 py-2">
              {{ subject.subjectCode }}
            </td>
            <td class="border px-4 py-2">
              {{ subject.subjectName }}
            </td>
            <td class="border px-4 py-2">
              {{ subject.subjectGroup }}
            </td>
            <td class="border px-4 py-2">
              {{ subject.practiceSession }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <button
    class="fixed bottom-0 right-0 box-border m-5 flex w-10 h-10 rounded-xl cursor-pointer border-none items-center justify-center overflow-hidden"
    @click="(() => {
      handleSaveSubject();
      toggle();
    })"
  >
    <img class="h-10 w-10" :src="logo" alt="logo">
  </button>
</template>
