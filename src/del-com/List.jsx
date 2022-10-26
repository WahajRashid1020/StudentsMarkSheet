import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import axios from "axios";
import ListForm from "./ListForm";
import Myform from "./Myform";
const List = () => {
  const [students, setStudents] = useState([]);
  const [regno, setregno] = useState(null);

  useEffect(() => {
    axios.get("/api/students").then((students) => setStudents(students.data));
  }, []);
  const handleClick = (regno) => {
    setregno(regno);
  };
  let showUpdated = (student) => {
    setStudents(students.map((s) => (s._id === student._id ? student : s)));
    setregno(null);
  };
  let url = "#";
  return (
    <>
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
      <div className="col">
        {regno !== null && <Myform showUpdated={showUpdated} regno={regno} />}
      </div>
    </>
  );
};

export default List;
