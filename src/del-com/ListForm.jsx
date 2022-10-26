import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ListForm = (props) => {
  const [student, setstudent] = useState("");
  const { regno } = props;
  useEffect(() => {
    axios
      .get(`/api/students/${regno}`)
      .then((student) => setstudent(student.data));
  }, [regno]);
  let handleChange = (e) => {
    const { name, value } = e.target;

    setstudent({ ...student, [name]: value });
  };
  let handleSave = () => {
    axios.patch(`/api/students/update`, student).then((res) => {
      if (res.status === 200) {
        props.showUpdated(res.data);
      }
    });
  };
  return (
    <div>
      <table>
        <tbody>
          {Object.keys(student).map((studentkey, i) => (
            <tr key={i}>
              <th style={{ textAlign: "right" }}>{studentkey}</th>
              <td>
                {studentkey !== "_id" ? (
                  <input
                    type="text"
                    name={studentkey}
                    value={student[studentkey]}
                    onChange={handleChange}
                  />
                ) : (
                  student[studentkey]
                )}
              </td>
            </tr>
          ))}
          <th></th>
          <td>
            <button onClick={handleSave}>Save</button>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default ListForm;
