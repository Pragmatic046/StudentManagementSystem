import StudentTable from "./StudentTable";

function StudentList({ students, setStudents }) {

  return (
    <>
      <h1>Student List</h1>
      {/* <div className="students-list">
        {students &&
          students.map((student) => {
            return (
              <div key={student.id} className="student">

                <h2>{student.name}</h2>
                <h3>{student.rollNo}</h3>
                <p>{student.age} Years Old</p>
              </div>
      );
          })}
      </div> */}

      <StudentTable
        students={students}
        setStudents={setStudents}
        // getStudents={getStudents}
      />
    </>
  );
}

export default StudentList;
