import type Subject from "~/interfaces/Subject"
import { parsePeriodTime } from "~/utils/parseData"

export default function SubjectList({
  subjects = [],
  currentDate = new Date(),
}: {
  subjects: Subject[]
  currentDate?: Date
}) {
  console.log(subjects)
  subjects = subjects.filter((subject) => {
    const currentDayOfWeek = currentDate.getDay()
    return (
      subject.dayOfWeek - 1 === currentDayOfWeek &&
      currentDate.getTime() >= new Date(subject.weeks[0]).getTime() &&
      currentDate.getTime() <= new Date(subject.weeks[1]).getTime()
    )
  })
  return (
    <ul className="space-y-4">
      {subjects.length > 0 ? (
        subjects.map((subject, index) => (
          <li key={`${subject.classCode}-${subject.practiceSession}`}>
            <div className="px-4 py-3 transition-shadow duration-500 bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div className="font-bold w-[200px]">{subject.subjectName}</div>
                <div className="min-w-[50px]">{subject.room}</div>
                <div className="min-w-[100px]">
                  {parsePeriodTime(subject.startingPeriod).start} -{" "}
                  {
                    parsePeriodTime(
                      subject.startingPeriod + subject.numberOfPeriods - 1
                    ).end
                  }
                </div>
              </div>
            </div>
          </li>
        ))
      ) : (
        <li>
          <div className="px-4 py-3 transition-shadow duration-500 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="font-bold">
                {currentDate.toLocaleDateString() ===
                new Date().toLocaleDateString()
                  ? "You don't have any subject today!!! 😍"
                  : `You don't have subjects on ${currentDate.toLocaleDateString(
                      "vi-VN"
                    )}`}
              </div>
              <div className="italic">-</div>
            </div>
          </div>
        </li>
      )}
    </ul>
  )
}
