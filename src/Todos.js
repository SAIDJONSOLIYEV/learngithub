import React,{useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';

function Todos(props) {
    const resetTodos={title:""}
    const [todos,setTodos]=useState([])
    const [check,setCheck]=useState(false)
    const [forDone,setForDone]=useState(false)
    const [forUnDone,setForUnDone]=useState(false)
    // const [todosRestore,settodosRestore]=useState([...todos])

    const {register,handleSubmit,reset}=useForm()
    const [currentTodos,setcurrentTodos]=useState("")
    function add(data){
        if(currentTodos ===""){
        todos.push({...data,active:false})  
        }
        else{
            todos[currentTodos]=data
            setcurrentTodos("")
        }
        reset(resetTodos)
        setTodos([...todos])
        todos.push(data)
        console.log(data);

       
    
    }
    function removeItem(index){
        todos.splice(index,1)
        setTodos([...todos])
    }
    function editItem(index){
        setcurrentTodos(index)
        let currentTodos=todos[index]
        reset(currentTodos)
        
    }
  
    function settingstyle(index){

if(!todos[index].active){
    todos[index].active=true
    setTodos([...todos])
}
else{
    todos[index].active=false
setTodos([...todos])
}


    }
    function all(){
        setForDone(false)
        setForUnDone(false)
    }
    function todo(){
        setForUnDone(true)
    }
    function done(){
        setForDone(true)
    }
    
    function deleteall(){
        setTodos([])
       
    }
    function deletedone(){
todos.map(item=>{
    if(item.active){
        todos.splice(item,1)
        setTodos([...todos])
    }
})
    }
    return (
        <div className='col-md-4 offset-4 py-5'>

            <div className='card'>
                <div card>
                    <div className='card-header bg-dark text-white'>Todo Apllication</div>
                    <div className='card-body'>
                       <form onSubmit={handleSubmit(add)}>
                       <input placeholder='New todo' className='form-control my-2'  type="text"{...register("title")} />
                        <button className='btn btn-dark w-100 '>Add new task</button>
                        <h3>Todo list</h3>
                       </form>
                       <div className='d-flex gap-5 offset-2'>
                            <button onClick={()=>all()} className='btn btn-info'>All</button>
                            <button onClick={()=>done()} className='btn btn-info'>Done</button>
                            <button onClick={()=>todo()} className='btn btn-info'>Todo</button>
                        </div> 
                  {
                    forUnDone?<div>{
                            todos.filter(item2=>item2.active===false).map((item,index)=><div>
                               <div className='container'>
                              <ul>
                           <td><input onChange={()=>settingstyle(index)} type="checkbox"  checked={item.active}/></td> 
                           <td style={todos[index].active?{textDecoration:'line-through'}:{textDecoration:'none'}} > {item.title}</td> 
                            <td><button className='btn btn-success' onClick={()=>editItem(index)}>edit</button></td>
                            <td><button className='btn btn-danger' onClick={()=>removeItem(index)}>remove</button></td>
                           </ul>
                         </div> 
                            </div>)
                            }
                    </div>:<div>
                    {
                        forDone?<div>
                            {
                            todos.filter(item2=>item2.active===true).map((item,index)=><div>
                               <div className='container'>
                              <ul>
                           <td><input onChange={()=>settingstyle(index)} type="checkbox"  checked={item.active}/></td> 
                           <td style={todos[index].active?{textDecoration:'line-through'}:{textDecoration:'none'}} > {item.title}</td> 
                            <td><button className='btn btn-success' onClick={()=>editItem(index)}>edit</button></td>
                            <td><button className='btn btn-danger' onClick={()=>removeItem(index)}>remove</button></td>
                           </ul>
                         </div> 
                            </div>)
                            }
                        </div>:<div>
                        {
                        todos.map((item,index)=>(
                         <div className='container'>
                         <ul>
                           <td><input onChange={()=>settingstyle(index)} type="checkbox"  checked={item.active}/></td> 
                           <td style={todos[index].active?{textDecoration:'line-through'}:{textDecoration:'none'}} > {item.title}</td> 
                            <td><button className='btn btn-success' onClick={()=>editItem(index)}>edit</button></td>
                            <td><button className='btn btn-danger' onClick={()=>removeItem(index)}>remove</button></td>
                           </ul>
                         </div>
                        ))
                    }
                        </div>
                    }
                    </div>
                  }
                    <div className='d-flex gap-5 offset-2'>
                        <button onClick={()=>deletedone()} className='btn btn-danger text-white'>Delete done task</button>
                        <button onClick={()=>deleteall()} className='btn btn-danger text-white'>Delete all task</button>

                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Todos;