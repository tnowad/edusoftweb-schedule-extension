<script setup lang="ts">
import { formatDate } from '@/utils/dateUtils'
import SubjectList from '@/components/SubjectList.vue'
import { filterSubjectsByDay } from '@/utils/subjectUtils'
import { storageSchedule } from '@/logic'
function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
const subjects = ref(filterSubjectsByDay(storageSchedule.value, new Date()))
const dateShowing = ref(formatDate(new Date()))

watch([dateShowing], () => {
  subjects.value = filterSubjectsByDay(storageSchedule.value, new Date(dateShowing.value))
})
</script>

<template>
  <main class="font-sans text-base bg-slate-50 w-[450px] max-w-[600px]">
    <div class="box-border px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">
        EduSoftWeb Schedule
      </h1>
      <div class="text-center">
        <button
          className="px-4 py-2 mr-4 text-white duration-300 bg-[#5cbfdd] rounded hover:shadow-lg"
          @click="openOptionsPage"
        >
          View Schedule
        </button>
        <button
          className="px-4 py-2 mr-4 text-white duration-300 bg-[#5cbfdd] rounded hover:shadow-lg"
          href="http://thongtindaotao.sgu.edu.vn/default.aspx?page=thoikhoabieu&sta=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Update Schedule
        </button>
      </div>
    </div>
    <div className="flex items-center justify-center mb-3">
      <button
        className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-[#5cbfdd] rounded-full duration-300 hover:shadow-lg hover:scale-105"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <input v-model="dateShowing" type="date">
      <button
        className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-[#5cbfdd] rounded-full duration-300 hover:shadow-lg hover:scale-105"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
    <SubjectList :subjects="subjects" />
  </main>
</template>
