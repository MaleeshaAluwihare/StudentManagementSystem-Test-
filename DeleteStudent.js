import React, { useState } from "react";
import axios from "axios";

const DeleteStudent = () => {

    const [studentId, setStudentId] = useState("");

    const deleteStudent = () => {

        axios.delete(`http://localhost:8070/student/delete/${studentId}`).then(res => {

            alert(res.data.status);

        }).catch(error => {

            alert(error.response.data.status);

        });
    };

    return (
        <div>
            <div className="container">
                <label htmlFor="studentId">Enter Student ID: </label>
                <input type="text" id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                <button onClick={deleteStudent}>Delete</button>
            </div>
        </div>
    );
};

export default DeleteStudent;
