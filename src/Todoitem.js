import React from 'react'


const Todoitem = (props) => {
   
    return (
        <div className ="todoitem">
        
           
         <i className="fas fa-trash-alt" onClick = {()=>{props.ondelete(props.id)}} ></i>
        
         <li>{props.todoval}</li> 
         <br/>
        
        </div>
    )
}

export default Todoitem
