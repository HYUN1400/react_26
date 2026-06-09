import StudentInfo from "../components/StudentsInfo"
import { student, students } from "../data/data"

export default function Comp1(){

    const studentInfo = (student:any) => {
      return(
          <div
            className="mb-5 mt-5"
          >
            <div
            className="text-lg font-bold text-blue-500">
                {student.name} ({student.age})
            </div>
            <div
            className="text-sm ml-2">
                ■ {student.address}
            </div>
            <div
            className="text-sm ml-2">
                ■ {student.phone}
            </div>
            <hr className="mt-3" />
          </div>
      )
    }


    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
              <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div
                  className="text-2xl font-bold"
                >
                  COMP1 AREA
                </div>
                <div>
                  {studentInfo(student)}
                  <StudentInfo students={students} />
                </div>
              </main>
            </div>
    )
}