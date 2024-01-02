import React, { useEffect } from 'react'
import { useState } from 'react'
function Nav(props) {
   
  

  return (
    <>
      <header className="header-part">
              <nav className="nav-bar">
                <div className="user-icon">UserList</div>
                <div className="input-part">
                 <label> 
                  <input type="text" 
                         className="input-field"
                         value={props.data} 
                         placeholder='search here'
                         onChange={(e)=>{props.setData(e.target.value)}}
                  />
                  </label>
                 {/* <button onClick={()=>{props.setData(inputField)} }> Search</button> */}
                 
                </div>
                 
              </nav>
      </header>
      
    </>
  )
}

export default Nav
