import React, { useState } from "react";
import axios from "axios";

export default function UpdateStudent() {
    
  const [studentID, setStudentID] = useState("");
  const [student, setStudent] = useState(null);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const getStudentDetails = () => {

    axios.get(`http://localhost:8070/student/get/${studentID}`).then((res) => {

      setStudent(res.data.student);

      // Set form fields to initial values when getting new student details
      setName(res.data.student.name);
      setAge(res.data.student.age);
      setGender(res.data.student.gender);
      setAddress(res.data.student.address);

    }).catch((err) => {
      alert("StudentNotFound");
    });
  };

  const sendData = (e) => {
    e.preventDefault(); // Prevent default form submission

    const updatedStudent = {
      name,
      age,
      gender,
      address,
    };

    axios.put(`http://localhost:8070/student/update/${studentID}`, updatedStudent)
      .then(() => {
        alert("Student Updated");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <div className="container">
        <label htmlFor="studentId">Enter Student ID: </label>
        <input type="text" id="studentId" value={studentID} onChange={(e) => setStudentID(e.target.value)} />
        <button onClick={getStudentDetails}>Display Details</button>
      </div>

      {student && (
        <div className="container">
          <form onSubmit={sendData}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" className="form-control" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age:</label>
              <input type="text" className="form-control" id="age" value={age} onChange={(e) => { setAge(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Gender:</label>
              <input type="text" className="form-control" id="gender" value={gender} onChange={(e) => { setGender(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address:</label>
              <input type="text" className="form-control" id="address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}
