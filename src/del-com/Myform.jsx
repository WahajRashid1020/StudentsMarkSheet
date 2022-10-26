import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Myform = (props) => {
  const { regno } = props;

  const [list, setlist] = useState({
    _id: "",
    studentname: "",
    fathername: "",
  });

  useEffect(() => {
    axios
      .get(`/api/students/${regno}`)
      .then((student) => setlist(student.data));
  }, [regno]);
  let handleSave = () => {
    axios.patch(`/api/students/update`, list).then((res) => {
      if (res.status === 200) {
        props.showUpdated(res.data);
      }
    });
  };
  const { _id, studentname, fathername } = list;
  let handleChange = (e) => {
    const { name, value } = e.target;

    setlist({ ...list, [name]: value });
  };
  return (
    <div className="col">
      <input type="text" name={_id} value={_id} onChange={handleChange} />
      <input
        type="text"
        name="studentname"
        value={studentname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="fathername"
        value={fathername}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Myform;
