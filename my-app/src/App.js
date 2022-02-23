import logo from './logo.svg';
import './App.css';
import List from './List';
import {useEffect, useState} from 'react';
//import Search from './Search'



function App() {

  const [students, setStudents] = useState([])
  
  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
    .then(resp => resp.json())
    .then(data => setStudents(data.students)) 
  },[])
  //console.log(students)

  
  const [search, setSearch] = useState("")
  
  let searchedStudents = students.filter(singleStudent => {
      
     return singleStudent.firstName.toLowerCase().includes(search.toLowerCase()) 
     || singleStudent.lastName.toLowerCase().includes(search.toLowerCase()) 

  })
 
 
  return (
    <div>
      <List students={searchedStudents} search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
