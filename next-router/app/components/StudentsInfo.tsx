interface studentType {
    id: number,
    name: string,
    age: number,
    address: string,
    phone: string
}

interface StudentInfoProps {
    students: studentType[];
}

export default function StudentInfo({students}:StudentInfoProps){

    return(
        <>
            {
                students.map((student) => (
                    <div key={student.id}
                    className="mb-5"
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
                        <hr className="mt-3"></hr>
                    </div>
                ))
            }
        </>
    )
}