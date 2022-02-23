import React from 'react';
import {useState} from 'react'
import Tags from './Tags';

export default function StudentCard({company, email, firstName, grades, lastName, pic, skill, id}) {

const [notClicked, setClick]  = useState(true)
const [tag, setTag] = useState([])

const studentGrade = grades.map((oneGrade) => {
     return parseInt(oneGrade)
 })


    function getAvg(studentGrade) {
        const total = studentGrade.reduce((a, b) => a + b)
        
        return total / studentGrade.length;
      }

      
    const average = getAvg(studentGrade);

     
    const handleButton = (e) => {
        setClick(!notClicked)
    }

    const displayTag = (addedTag) => {
        
        let tagArray = [...tag, addedTag]
       
          setTag(tagArray)
     }


    return (<div>

        <img style={{width: "15%", marginRight: "5px", borderRadius:"50%", borderColor:"lightGray", borderStyle:"solid", borderWidth:"1px"}} src={pic}/>
        <span style={{fontSize:"30px", fontWeight: "bolder"}}>{firstName.toUpperCase()} {lastName.toUpperCase()}</span>
        {notClicked ? 
        <button style={{backgroundColor:"white", border:"none", float:"right", fontSize:"30px", color:"green"}} onClick={handleButton}>➕</button>
            : 
        <button style={{backgroundColor:"white", border:"none", float:"right", fontSize:"30px", color:"green"}} onClick={handleButton}>➖</button>
        }
        
        {notClicked ?
        <div>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Skill: {skill}</p>
        <p>Average: {average} %</p>
        <Tags studentId={id} displayTag={displayTag} tag={tag} setTag={setTag}/>
        </div>
        :        
        <div>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Skill: {skill}</p>
        <p>Average: {average} %</p>
        <p>
            Test 1: {studentGrade[0]}%
            <br/>
            Test 2: {studentGrade[1]}%
            <br/>
            Test 3: {studentGrade[2]}%
            <br/>
            Test 4: {studentGrade[3]}%
            <br/>
            Test 5: {studentGrade[4]}%
            <br/>
            Test 6: {studentGrade[5]}%
            <br/>
            Test 7: {studentGrade[6]}%
            <br/>
            Test 8: {studentGrade[7]}%
            </p>
            <Tags studentId={id} displayTag={displayTag} tag={tag} setTag={setTag} />
        </div>
        }
     <hr/>

    </div>);
}
