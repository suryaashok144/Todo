
import "./Todo.css"
import { useState } from "react"
import React from "react";

let Todo=()=>{
     const [todos,settodos]=useState([]);

    let submitting=(e)=>{
        e.preventDefault();
        if(e.target.todo.value===""){
    alert("please enter todo")}else{
        let newtodo=e.target.todo.value;
        settodos((previous=>[...previous,newtodo]));
        e.target.todo.value="";
    }

    }
    console.log(todos)

    let deletee=(index)=>{
        let newtodose=[...todos]
        newtodose.splice(index,1);
        settodos(newtodose)


    }
    let update=(todo1,index)=>{
        let newtodose=[...todos]
        let val=prompt("enter value for update");
        if(val==""){
            alert("you did'nt enter value for update")
        }else{
        newtodose.splice(index,1,val);
        settodos(newtodose)}
    }

    
   
    return(
        <div id="container">
            <form  onSubmit={submitting} >
                <ul>
                    <li id="li1">
                        <input type="text" placeholder="Enter your task" id="todo" />
                        <input type="submit" value="Add" />
                    </li>        
                </ul>
            </form> 
                
                 <ul id="li2">                    
                    {todos.map((todo1,index) => (<div>
                    <li id="li1" key={index}>
                  <p id="crosss">{todo1}</p> <button onClick={()=>deletee(index)}>❌</button>
                  <button onClick={()=>update(todo1,index)}>update</button>
                  </li></div>))}

                </ul>
                
            
        
        </div>

    )
}
export default Todo;