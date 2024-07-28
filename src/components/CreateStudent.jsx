import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseConfig";

function CreateStudent({ getStudents }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [isCreatingStudent, setisCreatingStudent] = useState(false);

  // --------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table([name, age])
    try {
      setisCreatingStudent(true);
      await addDoc(collection(db, "students"), {
        rollNo: Number(rollNo),
        name: name,
        age: Number(age),
      });
      setRollNo("");
      setName("");
      setAge("");
      setisCreatingStudent(false);
      await getStudents();
    } catch (error) {
      console.log(error);
      setisCreatingStudent(false);
    }
  };

  // ----------------------------------------------------
  return (
    <form onSubmit={handleSubmit} className="form">
      {/* ------------------------- */}
      <input
        type="number"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        placeholder="Enter Student  Roll No"
      />
      {/* --------------------- */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Student  Name"
        required
      />
      {/* ------------------ */}
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter Student Age"
      />
      {/* ------------------------ */}
      <button type="submit">
        {isCreatingStudent ? "Creating..." : "Create Student"}
      </button>
    </form>
  );
}

export default CreateStudent;
