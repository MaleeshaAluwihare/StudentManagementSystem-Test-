import React, { useState } from "react";
import axios from "axios";

export default function StudentDetails() {

    const [student, setStudent] = useState(null);
    const [studentId, setStudentId] = useState("");

    const getStudentDetails = () => {
        axios.get(`http://localhost:8070/student/get/${studentId}`).then((res) => {

            setStudent(res.data.student);
        }).catch((err) => {
            alert("StudentNotFound");
        });
    };

    return (
        <div className="container">
            <br></br>
            <div className="container">
                <label htmlFor="studentId">Enter Student ID: </label>
                <input ype="text" id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                <button onClick={getStudentDetails}>Get Details</button>
            </div>

            <br></br>

            {student && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Attribute</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{student._id}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{student.name}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{student.age}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{student.gender}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{student.address}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}
