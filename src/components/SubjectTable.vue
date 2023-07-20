<script setup lang="ts">
import type Subject from '@/interfaces/Subject'

defineProps<{ subjects: Subject[] }>()
</script>

<template>
  <div class="flex flex-col items-center justify-center w-11/12 min-w-[1200px] max-w-[1400px] h-[80vh] box-border p-2 rounded-xl shadow-md">
    <div class="h-[80vh] grid overflow-hidden h-80vh gap-x-[1px] gap-y-[1px] w-full grid-cols-[5%_repeat(6,_1fr)_5%] grid-rows-[repeat(15,_1fr)]">
      <div
        v-for="index in 6"
        :key="`day top${index}`"
        class="bg-[#5cbfdd] text-white flex items-center justify-center duration-500 hover:shadow-lg hover:scale-[1.02]"
        :style="{ gridColumn: index + 1, gridRow: 1 }"
      >
        <div class="text-center">
          Thứ {{ index + 1 }}
        </div>
      </div>
      <div
        v-for="index in 6"
        :key="`day top${index}`"
        class="bg-[#5cbfdd] text-white flex items-center justify-center duration-500 hover:shadow-lg hover:scale-[1.02]"
        :style="{ gridColumn: index + 1, gridRow: 15 }"
      >
        <div class="text-center">
          Thứ {{ index + 1 }}
        </div>
      </div>
      <div
        v-for="index in 13"
        :key="`period left${index}`"
        class="bg-[#5cbfdd] text-white flex items-center justify-center duration-500 hover:shadow-lg hover:scale-[1.02]"
        :style="{ gridColumn: 1, gridRow: index + 1 }"
      >
        <div class="text-center">
          Tiết {{ index }}
        </div>
      </div>
      <div
        v-for="index in 13"
        :key="`period right${index}`"
        class="bg-[#5cbfdd] text-white flex items-center justify-center duration-500 hover:shadow-lg hover:scale-[1.02]"
        :style="{ gridColumn: '8/9', gridRow: index + 1 }"
      >
        <div class="text-center">
          Tiết {{ index }}
        </div>
      </div>

      <div
        v-for="(subject, index) in subjects"
        :key="`subject${index}`"
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
    </div>
  </div>
</template>

<style>
:root {
  --primary-color--0: #0369a1;
  --secondary-color--0: #3290c2;
  --tertiary-color--0: #e7f6fd;
  --primary-color--1: #874de0;
  --secondary-color--1: #874de0;
  --tertiary-color--1: #f4efff;
  --primary-color--2: #2f9074;
  --secondary-color--2: #2f9074;
  --tertiary-color--2: #e8f8f3;
  --primary-color--3: #71160d;
  --secondary-color--3: #71160d;
  --tertiary-color--3: #ffeff0;
  --primary-color--4: #b45309;
  --secondary-color--4: #b45309;
  --tertiary-color--4: #fef6e7;
  --primary-color--5: #73347f;
  --secondary-color--5: #73347f;
  --tertiary-color--5: #fdf3ff;
  --primary-color--6: #ab2f64;
  --secondary-color--6: #ab2f64;
  --tertiary-color--6: #fff3f8;
  --primary-color--7: #0095c2;
  --secondary-color--7: #0095c2;
  --tertiary-color--7: #f1faff;
  --primary-color--8: #65c18c;
  --secondary-color--8: #65c18c;
  --tertiary-color--8: #c3e9d3;
  --primary-color--9: #874de0;
  --secondary-color--9: #874de0;
  --tertiary-color--9: #f4efff;
  --primary-color--10: #874de0;
  --secondary-color--10: #874de0;
  --tertiary-color--10: #f4efff;
  --primary-color--11: #874de0;
  --secondary-color--11: #874de0;
  --tertiary-color--11: #f4efff;
}
</style>
