export default interface Subject {
  subjectCode: string;
  subjectName: string;
  subjectGroup: string;
  numberOfCredits: string;
  classCode: string | null;
  creditsForTuitionFee: string;
  notAllowedToRegister: string | null;
  practiceSession: string | null;
  dayOfWeek: number;
  startingPeriod: number;
  numberOfPeriods: number;
  room: string;
  lecturer: string;
  weeks: Date[];
  color?: number;
}
