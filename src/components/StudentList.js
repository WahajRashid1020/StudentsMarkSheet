import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const StudentList = () => {
  const [students, setstudents] = useState([]);
  const [regno, setregno] = useState(null);
  useEffect(() => {
    axios.get("/api/students").then((students) => setstudents(students.data));
  }, []);
  let handleClick = (regno) => {
    console.log(regno);
    setregno(regno);
  };
  let url = "#";
  return (
    <div>
      <div className="col">
        <table>
          <thead>
            <tr>
              <th>Reg#</th>
              <th>Name</th>
              <th>FatherName</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.regno}</td>
                <td>
                  <a href={url} onClick={() => handleClick(student.regno)}>
                    {student.studentname}
                  </a>
                </td>
                <td>{student.fathername}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
