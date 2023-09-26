import React, { useEffect, useState } from 'react'

import ActionColumn from './ActionColumn';

function DisplayInstances({ courses, instances }) {

  const [yearsemStatus, setYearSemStatus] = useState(true);
  const [yearcheck, setYearCheck] = useState('');
  const [semcheck, setSemCheck] = useState('');

  const [matchedData, setMatchedData] = useState([])



  const checkMatching = () => {
    const searchedData = instances.filter(item => (item.semester == semcheck && item.year == yearcheck));
    // console.log(searchedData)
    const matchingItems = [];
    const Data = searchedData.filter(item1 => {
      const matchingItem = courses.filter(item2 => item2.title === item1.title);
      if (matchingItem.length > 0) {

        matchingItems.push(...matchingItem);
      }
      // console.log(searchedData)

    });
    console.log(matchingItems);
    setMatchedData(matchingItems);
  }

  return (
    <div className='instances-check-area'>
      <h3>Instances</h3>

      <div className='instance-inputBox'>
        <input type="Number"  className='text-input' placeholder='Year' value={yearcheck} onChange={(e) => setYearCheck(e.target.value)} />
        <select name="" id="" value={semcheck} onChange={(e) => setSemCheck(e.target.value)} className='dropdownmenu'>
          <option value="" defaultChecked>Select Semester</option>
          {Array.from(new Set(instances.map((item) => item.sem))).map((sem, index) => (
            <option value={sem} key={index}>
              {instances.find((item) => item.sem === sem).semester}
            </option>
          ))}
        </select>


        <button onClick={checkMatching} className='primary-btn' >List Instances</button>
      </div>

      <table className='courses-table' rules='cols'>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Year-Sem</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {matchedData.map((data, index) =>
            <tr key={index}>
              <td> {data.title} </td>
              <td>{yearcheck}-{semcheck} </td>
              <td>{data.code} </td>
              <td><ActionColumn /> </td>
            </tr>
          )
          }

        </tbody>


      </table>
    </div>
  )
}

export default DisplayInstances