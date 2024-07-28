import "./App.css";
import { useState, useEffect } from "react";
import CreateStudent from "./components/CreateStudent";
import StudentList from "./components/StudentList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./FirebaseConfig";

function App() {
  const [students, setStudents] = useState([]);
  const studentsCollection = collection(db, "students");

  // --------------------------------------------
  const getStudents = async () => {
    try {
      const studentSnapshot = await getDocs(studentsCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentList);
    } catch (error) {
      alert("Error: ", error);
    }
  };

  // ---------------------------------------------
  useEffect(() => {
    getStudents();
  }, []);

  // ---------------------------------------------
  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Student Management System</h1>
        <div className="create-area">
          <CreateStudent getStudents={getStudents} />
        </div>
        <div className="record-area">
          <StudentList students={students} setStudents={setStudents} />
        </div>
      </div>
    </>
  );
}

export default App;
