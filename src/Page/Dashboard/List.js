import React from 'react'

function List({ students, handleEdit, handleDelete }) {

  // const formatter = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //   minimumFractionDigits: null
  // });

  return (
    <div className='contain-table'>
      <table className='striped-table'>
        <thead>
          <tr>
            <th className="text-center">No.</th>
            <th className="text-center">Student ID</th>
            <th className="text-center">Name</th>
            <th className="text-center">Course</th>
            <th className="text-center">Cgpa</th>
            <th className="text-center">Attendance</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, i) => (
              <tr key={student.No}>
                <td className="text-center">{i + 1}</td>
                <td className="text-center">{student.id}</td>
                <td className="text-center">{student.Name}</td>
                <td className="text-center">{student.Course}</td>
                <td className="text-center">{student.Cgpa}</td>
                <td className="text-center">{student.Attendance}%</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(student.No)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(student.No)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>Add Student to view details</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default List