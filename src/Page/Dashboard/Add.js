import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Add({ students, setStudent, setIsAdding }) {

  const [id, setid] = useState('')
  const [Name, setName] = useState('')
  const [Course, setCourse] = useState('')
  const [Cgpa, setCgpa] = useState('');
  const [Attendance, setAttendance] = useState('')

  //const textInput = useRef(null);

  // useEffect(() => {
  //   textInput.current.focus();
  // }, [])

  const handleAdd = e => {
    e.preventDefault();
    if (!id || !Name || !Course || !Cgpa || !Attendance) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      });
    }

    const No = students.length + 1;
    const Student = {
      No,
      id,
      Name,
      Course,
      Cgpa,
      Attendance,
    }

    let count=0;
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        count += 1;
      }
    }

    if (count === 0) {
      students.push(Student);
      setStudent(students);
      setIsAdding(false);

      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${Name}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500
      });
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: "ID can't be same for two Students",
        showConfirmButton: true
      });
    }
  }


  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Student</h1>
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
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add

// import React, { useState, useRef, useEffect } from 'react'
// import Swal from 'sweetalert2';

// function Add({ employees, setEmployees, setIsAdding }) {

//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [salary, setSalary] = useState('');
//     const [date, setDate] = useState('');

//     const textInput = useRef(null);

//     useEffect(() => {
//         textInput.current.focus();
//     }, [])

//     const handleAdd = e => {
//         e.preventDefault();
//         if (!firstName || !lastName || !email || !salary || !date) {
//             return Swal.fire({
//                 icon: 'error',
//                 title: 'Error!',
//                 text: 'All fields are required.',
//                 showConfirmButton: true
//             });
//         }

//         const id = employees.length + 1;
//         const newEmployee = {
//             id,
//             firstName,
//             lastName,
//             email,
//             salary,
//             date
//         }
//         employees.push(newEmployee);
//         setEmployees(employees);
//         setIsAdding(false);

//         Swal.fire({
//             icon: 'success',
//             title: 'Added!',
//             text: `${firstName} ${lastName}'s data has been Added.`,
//             showConfirmButton: false,
//             timer: 1500
//         });
//     }


//     return (
//         <div className="small-container">
//             <form onSubmit={handleAdd}>
//                 <h1>Add Employee</h1>
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                     id="firstName"
//                     type="text"
//                     ref={textInput}
//                     name="firstName"
//                     value={firstName}
//                     onChange={e => setFirstName(e.target.value)}
//                 />
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                     id="lastName"
//                     type="text"
//                     name="lastName"
//                     value={lastName}
//                     onChange={e => setLastName(e.target.value)}
//                 />
//                 <label htmlFor="email">Email</label>
//                 <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                 />
//                 <label htmlFor="salary">Salary ($)</label>
//                 <input
//                     id="salary"
//                     type="number"
//                     name="salary"
//                     value={salary}
//                     onChange={e => setSalary(e.target.value)}
//                 />
//                 <label htmlFor="date">Date</label>
//                 <input
//                     id="date"
//                     type="date"
//                     name="date"
//                     value={date}
//                     onChange={e => setDate(e.target.value)}
//                 />
//                 <div style={{ marginTop: '30px' }}>
//                     <input type="submit" value="Add" />
//                     <input
//                         style={{ marginLeft: '12px' }}
//                         className="muted-button"
//                         type="button"
//                         value="Cancel"
//                         onClick={() => setIsAdding(false)}
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Add