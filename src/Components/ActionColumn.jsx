import axios from 'axios'
import React from 'react'

function ActionColumn({deleteById, courses}) {
    
    const deleteCourse =()=> {
        axios.delete(`http://localhost:8000/api/courses/${deleteById}/`,)
            .then(response => console.log("deleted succesfully",response))
            .catch(error => console.log(error))
    }
  return (
    <div>
            <button><i class="fa fa-search" aria-hidden="true"></i></button>
            
            <span></span>
            &nbsp; &nbsp;
            <i class="fa fa-trash" aria-hidden="true" onClick={deleteCourse}></i>
            
        
    </div>
  )
}

export default ActionColumn