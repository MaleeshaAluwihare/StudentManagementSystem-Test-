import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllStudents() {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        function getStudents() {
            axios.get("http://localhost:8070/student/").then((res) => {
                console.log(res.data)
                setStudents(res.data)
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudents();
    }, [])

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{student._id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
