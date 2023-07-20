import { getDayOfWeekNumber } from './dayOfWeekUtils'
import type Subject from '@/interfaces/Subject'

export const convertWeeksToTime = (weeksText: string): number[] => {
  return weeksText
    .split('--')
    .map(week => new Date(week.replace(/(\d+[/])(\d+[/])/, '$2$1')).getTime())
}

export const parseSubjectData = (tdElements: Element[]): Subject => {
  const subjectText = tdElements.reduce(
    (previous, current) => `${previous + (current as HTMLElement).innerText}|`,
    '',
  )
  const subjectFields = subjectText.split('|')

  return {
    subjectCode: subjectFields[0],
    subjectName: subjectFields[1],
    subjectGroup: subjectFields[2],
    numberOfCredits: subjectFields[3],
    classCode: subjectFields[4],
    creditsForTuitionFee: subjectFields[5],
    notAllowedToRegister: subjectFields[6],
    practiceSession: subjectFields[7],
    dayOfWeek: getDayOfWeekNumber(subjectFields[8]),
    startingPeriod: parseInt(subjectFields[9]),
    numberOfPeriods: parseInt(subjectFields[10]),
    room: subjectFields[11],
    lecturer: subjectFields[12],
    weeks: (() => {
      const weeks = convertWeeksToTime(tdElements[13].innerHTML.split('\'')[1])
      return { start: weeks[0], end: weeks[1] }
    })(),
  }
}

export const assignColorsToSubjects = (data: Subject[]): Subject[] => {
  let colorIndex = 0
  const colorsMap = new Map<string, number>()

  for (const item of data) {
    if (item.color === undefined) {
      const key = item.subjectCode
      const existingColor = colorsMap.get(key)
      const color = existingColor ?? colorIndex++
      item.color = color
      colorsMap.set(key, color)
    }
  }

  data.sort((a, b) => a.color! - b.color!)

  return data
}
