import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ students, selectedStudent, setStudent, setIsEditing }) {

  const No = selectedStudent.No;
  const [id, setid] = useState(selectedStudent.id);
  const [Name, setName] = useState(selectedStudent.Name);
  const [Course, setCourse] = useState(selectedStudent.Course);
  const [Cgpa, setCgpa] = useState(selectedStudent.Cgpa);
  const [Attendance, setAttendance] = useState(selectedStudent.Attendance);

  const handleUpdate = e => {
    e.preventDefault();

    if (!No || !id || !Name || !Course || !Cgpa || !Attendance) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      });
    }

    const student = {
      No,
      id,
      Name,
      Course,
      Cgpa,
      Attendance,
    };

    for (let i = 0; i < students.length; i++) {
      if (students[i].No === No) {
        students.splice(i, 1, student);
        break;
      }
    }

    setStudent(students);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${student.Name}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Student</h1>
        <label htmlFor="firstName">Student ID</label>
        <input
          id="id"
          type="text"
          name="id"
          value={id}
          onChange={e => setid(e.target.value)}
        />
        <label htmlFor="lastName">Student Name</label>
        <input
          id="Name"
          type="text"
          name="Name"
          value={Name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="email">Course</label>
        <input
          id="Course"
          type="text"
          name="Course"
          value={Course}
          onChange={e => setCourse(e.target.value)}
        />
        <label htmlFor="salary">CGPA</label>
        <input
          id="Cgpa"
          type="number"
          name="Cgpa"
          value={Cgpa}
          onChange={e => setCgpa(e.target.value)}
        />
        <label htmlFor="date">Attendance</label>
        <input
          id="Attendance"
          type="number"
          name="Attendance"
          value={Attendance}
          onChange={e => setAttendance(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit


