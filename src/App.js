import './App.css';
import { useState } from "react";
import Todoitem from './Todoitem';

function App() {
  const [todo, setTodo] = useState("");

  const [todoitems, setTodoitems] = useState([]);

  function setitem(e) {
   
     setTodo(e.target.value);
    
  }

  function updatetodo() {
    setTodoitems((oldtodo) => {
      return [...oldtodo, todo];
    })
    setTodo("");
  }

  function ondelete(id){
    
    
    var newarray =  todoitems.filter(function(element,index){
       return index!==id;
    })
    setTodoitems(newarray);
   
  

  
  }



  return (
    <>

      <div className="main_div">


        <div className="center_div">
          <h2>Todo App</h2>
          <br />
          <input type="text" placeholder="Add your todo" value={todo} onChange={setitem} />
          <button onClick={updatetodo}><small>+</small></button>
          <ol>
            {
              todoitems.map((todo,index)=>{
                
               return( <Todoitem todoval = {todo} ondelete = {ondelete} key = {index} id = {index}/>)
              })
            }
          </ol>




        </div>

      </div>

    </>
  );
}

export default App;
