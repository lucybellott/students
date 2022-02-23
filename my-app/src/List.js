import React from 'react';
import StudentCard from './StudentCard';
import Search from './Search'
//import {useState} from 'react';

export default function List({students, search, setSearch}) {



 const something = {width: "50rem", borderRadius:"10px"}


 
 

  const studentsArray = students.map((student) => {
      return <div>
        <StudentCard
              key = {student.id}
              {...student}
              
          />
      </div>
    
  })

  
  return (
  <div style={{backgroundColor: "lightGray", paddingBottom:"50px", paddingTop:"50px"}}>
       
  <div className="card" style={something}>
       <Search search={search} setSearch={setSearch}/>
      
      <br/>
      {studentsArray}
      

  </div>
  </div>);
}
