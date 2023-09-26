import React from 'react';
import ActionColumn from './ActionColumn';

function DisplayCourses({ courses }) {

  
  return (
    <div>
      <h3>Courses</h3>
      <table className='courses-table' rules='cols'>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.code}</td>
              <td> 
                <ActionColumn deleteById = {item.id} courses ={courses} />
                
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayCourses;
