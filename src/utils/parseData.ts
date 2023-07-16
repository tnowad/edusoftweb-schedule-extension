import type Subject from "~/interfaces/Subject"

export const parseDayOfWeek = (day: string): number => {
  const daysOfWeek: Record<string, number> = {
    Hai: 2,
    Ba: 3,
    Tư: 4,
    Năm: 5,
    Sáu: 6,
    Bảy: 7,
    Mon: 2,
    Tue: 3,
    Wed: 4,
    Thu: 5,
    Fri: 6,
    Sat: 7,
  }
  return daysOfWeek[day]
}

export const parseWeeks = (weeksText: string): number[] => {
  // convert to time in number
  return weeksText
    .split("--")
    .map((week) => new Date(week.replace(/(\d+[/])(\d+[/])/, "$2$1")).getTime())
}

export const parseSubject = (tdElements: Element[]): Subject => {
  const subjectText = tdElements.reduce(
    (previous, current) => `${previous + (current as HTMLElement).innerText}|`,
    ""
  )
  const subjectFields = subjectText.split("|")

  return {
    subjectCode: subjectFields[0],
    subjectName: subjectFields[1],
    subjectGroup: subjectFields[2],
    numberOfCredits: subjectFields[3],
    classCode: subjectFields[4],
    creditsForTuitionFee: subjectFields[5],
    notAllowedToRegister: subjectFields[6],
    practiceSession: subjectFields[7],
    dayOfWeek: parseDayOfWeek(subjectFields[8]),
    startingPeriod: parseInt(subjectFields[9]),
    numberOfPeriods: parseInt(subjectFields[10]),
    room: subjectFields[11],
    lecturer: subjectFields[12],
    weeks: parseWeeks(tdElements[13].innerHTML.split("'")[1]),
  }
}

export const parsePeriodTime = (
  period: number
): { start: string; end: string } => {
  const periodTime: Record<number, { start: string; end: string }> = {
    1: { start: "07:00", end: "07:50" },
    2: { start: "07:50", end: "08:40" },
    3: { start: "09:00", end: "09:50" },
    4: { start: "09:50", end: "10:40" },
    5: { start: "10:40", end: "11:30" },
    6: { start: "13:00", end: "13:50" },
    7: { start: "13:50", end: "14:40" },
    8: { start: "15:00", end: "15:50" },
    9: { start: "15:50", end: "16:40" },
    10: { start: "16:40", end: "17:30" },
    11: { start: "17:40", end: "18:30" },
    12: { start: "18:30", end: "19:20" },
    13: { start: "19:20", end: "20:10" },
  }
  return periodTime[period]
}
export const fillColor = (data: Subject[]): Subject[] => {
  let colorIndex = 0
  const colorsMap = new Map<string, number>()

  for (const item of data) {
    if (item.color === undefined) {
      const key = item.subjectCode
      const existingColor = colorsMap.get(key)
      const color = existingColor !== undefined ? existingColor : colorIndex++
      item.color = color
      colorsMap.set(key, color)
    }
  }

  data.sort((a, b) => a.color! - b.color!)

  return data
}
