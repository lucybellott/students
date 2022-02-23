import React from 'react';

export default function Search({search, setSearch}) {
  
  
  
  return (<div>
      <input style={{width:"770px", margin:"auto", borderWidth:"0px 0px 1px 0px", borderColor:"lightgray"}} value={search} type="text" placeholder="Search by name"
      onChange={(e) =>setSearch(e.target.value)}></input>
  </div>);
}
