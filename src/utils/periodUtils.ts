const periodTime: Record<number, { start: string; end: string }> = {
  1: { start: '07:00', end: '07:50' },
  2: { start: '07:50', end: '08:40' },
  3: { start: '09:00', end: '09:50' },
  4: { start: '09:50', end: '10:40' },
  5: { start: '10:40', end: '11:30' },
  6: { start: '13:00', end: '13:50' },
  7: { start: '13:50', end: '14:40' },
  8: { start: '15:00', end: '15:50' },
  9: { start: '15:50', end: '16:40' },
  10: { start: '16:40', end: '17:30' },
  11: { start: '17:40', end: '18:30' },
  12: { start: '18:30', end: '19:20' },
  13: { start: '19:20', end: '20:10' },
}

export const getPeriodTime = (
  period: number,
): { start: string; end: string } => {
  return periodTime[period]
}
