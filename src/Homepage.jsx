import React , {useEffect,useState} from 'react'
import axios from 'axios'
import AddInstances from './Components/AddInstances';
import DisplayInstances from './Components/DisplayInstances';
import ModifyCourses from './Components/ModifyCourses';
import DisplayCourses from './Components/DisplayCourses';

function Homepage() {
    const [courses,setCourses] = useState([]);
    const [instances, setInstances] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/courses/')
            .then((response)=> setCourses(response.data))
            .catch((error) => console.log(error));
    },[courses]);

    useEffect(()=>{
      axios.get('http://localhost:8000/api/instances/')
            .then((response)=> setInstances(response.data))
            .catch((error) => console.log(error));
  },[instances]);




    
  return (
    <div>

      <div className='input-section'>
        <ModifyCourses />
        <AddInstances courses={courses} />
         
      </div>
      <hr />
      <DisplayCourses courses={courses} />
      <hr />
        
      <DisplayInstances courses = {courses} instances={instances} />

        

        
        
        
    </div>
  )
}

export default Homepage