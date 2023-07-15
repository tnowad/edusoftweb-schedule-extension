import Subject from "~/interfaces/Subject";

export function SubjectTable({
  subjects,
  currentDate = new Date(),
}: {
  subjects: Subject[];
  currentDate?: Date;
}) {
  subjects = subjects.filter((subject) => {
    return (
      currentDate >= new Date(subject.weeks[0]) &&
      currentDate <= new Date(subject.weeks[1])
    );
  });
  return (
    <div className="flex flex-col items-center justify-center w-11/12 min-w-[1200px] max-w-[1400px] h-[80vh] box-border p-2 rounded-xl shadow-md">
      <div
        className="h-[80vh] grid overflow-hidden h-80vh gap-x-[1px] gap-y-[1px] w-full"
        style={{
          gridTemplateColumns: "5% repeat(6, 1fr) 5%",
          gridTemplateRows: "repeat(15, 1fr)",
        }}
      >
        {
          // loop 6 times to create 6 rows
          [...Array(6)].map((_, index) => {
            return (
              <>
                <div
                  className="bg-[#5cbfdd] text-white flex items-center justify-center duration-500 hover:shadow-lg hover:scale-[1.02]"
                  key={"day top" + index}
                  style={{
                    gridColumn: index + 2,
                    gridRow: 1,
                  }}
                >
                  <div className="text-center">Thứ {index + 2}</div>
                </div>
                <div
                  className="bg-[#5cbfdd]  text-white flex items-center justify-center duration-500 hover:shadow-lg hover:scale-[1.02]"
                  key={"day bottom" + index}
                  style={{
                    gridColumn: index + 2,
                    gridRow: "15 / 16",
                  }}
                >
                  <div className="text-center">Thứ {index + 2}</div>
                </div>
              </>
            );
          })
        }
        {
          // loop 13 times to create 13 columns
          [...Array(13)].map((_, index) => {
            return (
              <>
                <div
                  className="bg-[#5cbfdd] text-white flex items-center justify-center duration-500 hover:shadow-lg hover:scale-[1.02]"
                  key={"period left" + index}
                  style={{
                    gridColumn: 1,
                    gridRow: index + 2,
                  }}
                >
                  <div className="text-center">Tiết {index + 1}</div>
                </div>
                <div
                  className="bg-[#5cbfdd]  text-white flex items-center justify-center duration-500 hover:shadow-lg hover:scale-[1.02]"
                  key={"period right" + index}
                  style={{
                    gridColumn: "8 / 9",
                    gridRow: index + 2,
                  }}
                >
                  <div className="text-center">Tiết {index + 1}</div>
                </div>
              </>
            );
          })
        }
        {subjects.map((subject, index) => {
          return (
            <div
              className={`shadow-sm bg-white flex items-center justify-center border-l duration-500 hover:shadow-lg hover:scale-[1.02]`}
              key={"subject" + index}
              style={{
                gridColumn: subject.dayOfWeek,
                gridRow: `${subject.startingPeriod + 1} / span ${
                  subject.numberOfPeriods
                }`,
                color: `var(--primary-color--${subject.color})`,
                borderColor: `var(--secondary-color--${subject.color})`,
                backgroundColor: `var(--tertiary-color--${subject.color})`,
              }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="text-base font-bold text-center">
                  {subject.subjectName}
                </div>
                <div className="text-center">{subject.room}</div>
                {subject.practiceSession && (
                  <div>Thực hành {subject.practiceSession}</div>
                )}
              </div>
            </div>
          );
        })}
        {
          // loop 82 - current total number of periods to create empty cells
          [
            ...Array(
              82 - subjects.reduce((acc, cur) => acc + cur.numberOfPeriods, 0)
            ),
          ].map((_, index) => {
            return <div className="shadow-sm" key={"empty" + index} />;
          })
        }
      </div>
    </div>
  );
}
