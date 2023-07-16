import { useEffect, useState } from 'react'
import { storage } from 'webextension-polyfill'
import { SubjectTable } from '~/components/SubjectTable'
import Subject from '~/interfaces/Subject'

export function OptionsApp() {
  const [subjects, setSubjects] = useState<Subject[]>([])

  useEffect(() => {
    storage.local.get('subject').then((value) => {
      setSubjects(value['subject'])
    })
  }, [])

  const [currentDate, setCurrentDate] = useState(new Date())
  return (
    <div className="flex items-center justify-center w-full h-[100vh] flex-col bg-slate-50">
      <div className="flex items-center justify-center mb-8">
        {/* create 2 button with svg previous day and next day */}
        <button
          className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-[#5cbfdd] rounded-full duration-300 hover:shadow-lg hover:scale-105"
          onClick={() => {
            const date = new Date(currentDate)
            date.setDate(date.getDate() - 7)
            setCurrentDate(date)
          }}
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
            ></path>
          </svg>
        </button>
        <div className="flex items-center justify-center w-24 font-semibold">
          {currentDate.toLocaleDateString('vi-VN')}
        </div>
        <button
          className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-[#5cbfdd] rounded-full duration-300 hover:shadow-lg hover:scale-105"
          onClick={() => {
            const date = new Date(currentDate)
            date.setDate(date.getDate() + 7)
            setCurrentDate(date)
          }}
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
            ></path>
          </svg>
        </button>
      </div>
      <SubjectTable subjects={subjects} currentDate={currentDate} />
    </div>
  )
}
