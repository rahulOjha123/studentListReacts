import React, { useState } from 'react'
import List from './List'
import "../StudentList/StudentList.css"
import Data from "./Data"
function Students () {
    const  [student,setStudent]=useState(Data)
    const deletelist=()=>{
        setStudent([])
    }


  return (
    <>
            <div className='containarr'>
                <h5>Length {student.length}:</h5>
                <List namelist={student}/>
                <div className='button'>
                    <button className='btnn' onClick={deletelist}>Clear All</button>
                </div>
            </div>
    </>
  )
}

export default Students 