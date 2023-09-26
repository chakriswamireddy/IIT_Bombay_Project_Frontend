import axios from 'axios';
import React, { useEffect, useState} from 'react'

function AddInstances({ courses }) {

    const [dropdownValue, setDropdownValue] = useState('');

    const [newYear, setNewYear] = useState('');
    const [newSem, setNewSem] = useState('');
    const [getId,setGetId] = useState('');

    const fetchInstances = () => {
        axios.get('http://localhost:8000/api/instances/')
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    const addInstance = () => {


        if (!dropdownValue || !newYear || !newSem) {
            window.alert("Please fill in all required fields.");
            return;
        }


        //adding to instance
        const newcourse = {
            title: dropdownValue,    
            year:newYear,
            semester:newSem,
            course_id:getId,
        }

        axios.post('http://localhost:8000/api/instances/', newcourse)
            .then(reposnse => {
                fetchInstances();
                setNewYear('');
                setNewSem('');
                setDropdownValue('');
                
                console.log(reposnse.data)

            })
            .catch(error => console.log(error))
    }

    const handleCourseSelect = (event) => {
        const selectedValue = event.target.value;
        setDropdownValue(selectedValue);

        
    };

    useEffect(() => {
        const clickedcourse = courses.find((item) => item.title === dropdownValue);
        if (clickedcourse) {
          setGetId(clickedcourse.id);
          console.log(clickedcourse.id);
        }
      }, [dropdownValue, courses]);


    return (
        <div className='instance-box'>
            <h3>Enter Instances</h3>
            <div>
                <select name="Select course" id=""   value={dropdownValue} onChange={handleCourseSelect} className='dropdownmenu' >
                <option  defaultChecked >Select Course</option>
                    {courses.map((item,index) =>
                        <option value={item.title} key={index}  >{item.title}</option>
                    )}
                </select>

                <button>Refresh</button>
            </div>

            <div>

                <input type="number"  className='text-input' placeholder='Year' value={newYear} onChange={e => setNewYear(e.target.value)} />
                <input type="number"  className='text-input' placeholder='Semester' value={newSem} onChange={e => setNewSem(e.target.value)} />
            </div>
            <button onClick={addInstance} className='primary-btn' >Add Instance</button>


        </div>
    )
}

export default AddInstances