import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [studentName, setstudentName] = useState("");
  const [studentList, setstudentList] = useState([]);
  const [editMood, seteditMood] = useState(false);
  const [editAbleMood, seteditAbleMood] = useState(null);

  const reUseFetch = () => {
    fetch(`http://localhost:3001/noteList`)
      .then((res) => res.json())
      .then((data) => setstudentList(data));
  };
  useEffect(() => {
    reUseFetch();
  }, []);

  const handleChange = (e) => {
    setstudentName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setstudentName("");

    if (studentName.trim() === "") {
      return alert("Enter a valied name");
    }

    editMood ? handleUpdateName() : handleAddStudent();
  };

  const handleAddStudent = () => {
    const insertStudent = {
      id: Date.now() + "",
      name: studentName,
      present: false,
    };
    fetch(`http://localhost:3001/noteList`, {
      method: "POST",
      body: JSON.stringify(insertStudent),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      reUseFetch();
    });
  };

  const handleDelet = (listId) => {
    fetch(`http://localhost:3001/noteList/${listId}`, {
      method: "DELETE",
    }).then(() => {
      reUseFetch();
    });
  };

  const handleEdit = (list) => {
    seteditMood(true);
    seteditAbleMood(list);
    setstudentName(list.name);
  };

  const handleUpdateName = () => {
    const { id, ...rest } = editAbleMood;
    const updatedName = { ...rest, name: studentName };
    fetch(`http://localhost:3001/noteList/${editAbleMood.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedName),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      reUseFetch();
      seteditMood(false);
      setstudentName("");
    });
  };

  const handleTogglePresent = (id) => {
    const studentToUpdate = studentList.find((student) => student.id === id);
    if (!studentToUpdate) return;

    const updatedStudent = {
      ...studentToUpdate,
      present: !studentToUpdate.present,
    };

    fetch(`http://localhost:3001/noteList/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedStudent),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      reUseFetch();
    });

    //map diyeo kora jay but jeheto server e data update hobe tai find valo

    // const updatedList = studentList.map((student) => {
    //   if (student.id === id) {
    //     const updatedStudent = { ...student, present: !student.present };
    //     fetch(`http://localhost:3001/noteList/${id}`, {
    //       method: "PUT",
    //       body: JSON.stringify(updatedStudent),
    //       headers: { "Content-type": "application/json" },
    //     });
    //     return updatedStudent;
    //   }
    //   return student;
    // });

    // setstudentList(updatedList);
  };

  return (
    <div className="Container">
      <div className="Input-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter student name"
            value={studentName}
            onChange={handleChange}
          />

          <button type="submit">
            {editMood ? "Update Student" : "Add Student"}
          </button>
        </form>
      </div>
      <div className="student-list">
        <h2>All-students</h2>
        <ul>
          {studentList.map((list) => (
            <li key={list.id}>
              <input
                type="checkbox"
                checked={list.present}
                onChange={() => handleTogglePresent(list.id)}
              />
              <span>{list.name}</span>
              <button className="Edit-button" onClick={() => handleEdit(list)}>
                Edit
              </button>
              <button
                className="Delete-button"
                onClick={() => handleDelet(list.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
