import React from 'react'
import {useState, useEffect} from 'react';
import Tag from './Tag';

export default function Tags({studentId, displayTag, tag, setTag}) {

   
    const [newTag, setNewTag] = useState("")
  
    useEffect(() => {
        fetch(`http://localhost:3000/tags/`)
        .then(resp => resp.json())
        .then((data) => { 
            const result = data.filter((item) => {
                console.log(item.student_id)
                return item.student_id === studentId
            })
           
            setTag(result)

        }) 
      },[])

      const mappedTag = tag.map((oneTag) => {
          return <Tag
              key={oneTag.id}
              {...oneTag}
              />
          
      })

      function handleKey (e) {
        if(e.code === 'Enter'){
            e.preventDefault()
            handleSubmit()
    
    }}

     function handleTag (e) {
        setNewTag(e.target.value)
        
        }


      const handleSubmit = () =>{
        
        let tagData = {
            title: newTag,
            student_id: studentId
           }

    fetch(`http://localhost:3000/tags/`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(tagData),
            })
            .then((res) => res.json())
            .then(data => displayTag(data))
            
            setNewTag("")

        }
  
    return (
    <div>
       <div>
         {mappedTag}
       </div>
       <br/>
       <br/>
       <form>
            <input className="tagInput" onChange={handleTag}  onKeyDown={handleKey} type="text" placeholder="Add a tag" value={newTag}></input>
        </form>
        
    </div>
  )
}
