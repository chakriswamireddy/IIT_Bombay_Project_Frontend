import axios from 'axios'
import React, { useState } from 'react'

function ModifyCourses() {

    const [newTitle,setNewTitle] = useState('');
    const [newCode,setNewCode] = useState('');
    const [newDescription,setNewDescription] = useState('');
    const [courses,setCourses] = useState([]);

    const fetchCourses = () => {
        axios.get('http://localhost:8000/api/courses/')
            .then((response) => setCourses(response.data))
            .catch((error) => console.error(error));
    };

    const addCourse =() => {
        axios.post ('http://localhost:8000/api/courses/',{title:newTitle,code:newCode,description:newDescription})
            .then(response => {
                fetchCourses();
                setNewCode('');
                setNewTitle('');
                setNewDescription('');
            })
            .catch(
                (error)=> console.log(error)
            )
        
    }


  return (
    <div>
        
        <div className='add-course-section'>
        <h3>Enter Courses</h3>
            <input type="text" id="" placeholder='Course Title' value={newTitle} onChange={e => setNewTitle(e.target.value)} className='text-input' />
            <input type="text" name="" id="" placeholder='Course Code' value={newCode} onChange={e => setNewCode(e.target.value)}  className='text-input' />
            <input type="text" name="" id="" placeholder='Course Description' value={newDescription} onChange={e => setNewDescription(e.target.value)}  className='text-input' />
            <button onClick={addCourse} className='primary-btn' >Add Course</button>
        </div>
    </div>
  )
}

export default ModifyCourses