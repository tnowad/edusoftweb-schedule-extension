export interface DaysOfWeekMap {
  [day: string]: number
}

export const defaultDaysOfWeekMap: DaysOfWeekMap = {
  Mon: 2,
  Tue: 3,
  Wed: 4,
  Thu: 5,
  Fri: 6,
  Sat: 7,
}

export const vietnameseDaysOfWeekMap: DaysOfWeekMap = {
  Hai: 2,
  Ba: 3,
  Tư: 4,
  Năm: 5,
  Sáu: 6,
  Bảy: 7,
}

export const getDayOfWeekNumber = (day: string, daysOfWeekMap?: DaysOfWeekMap): number => {
  if (daysOfWeekMap)
    return daysOfWeekMap[day]

  return defaultDaysOfWeekMap[day] ?? vietnameseDaysOfWeekMap[day] ?? 0
}

export const getDayOfWeekFromNumber = (dayNumber: number, daysOfWeekMap?: DaysOfWeekMap): string | undefined => {
  if (daysOfWeekMap)
    return Object.keys(daysOfWeekMap).find(key => daysOfWeekMap[key] === dayNumber)

  const combinedMap: DaysOfWeekMap = { ...defaultDaysOfWeekMap, ...vietnameseDaysOfWeekMap }
  return Object.keys(combinedMap).find(key => combinedMap[key] === dayNumber)
}
