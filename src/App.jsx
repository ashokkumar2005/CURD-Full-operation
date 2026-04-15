
import API from "./Api.jsx"
import { useState,useEffect } from "react";


function App() {
    
    const [task,setTask] = useState("");
    const [events,setEvents] = useState([]);

    //READ task
    const readdata = async()=>{
       try{
        const res = await API.get("/tasks");
        setEvents(res.data);
       }catch(error){
         console.log(error);
       }
    }

    //CREATE task
    const createdata = async()=>{
        if(!task.trim()) return;

        try{
            await API.post("/tasks",{title:task});
            readdata()
            setTask("");
        }catch(error){
            console.log(error)
        }
      
    }

    //DELETE task 
    const deletetask = async (id)=>{
       
       try{
        await API.delete(`/tasks/${id}`);
        readdata();
       }catch(error){
        console.log(error);
       }
     }
     useEffect(()=>{
        readdata()
     },[])

    return(
        <>
        <label>Enter a Task</label>
        <input 
        value={task}
        onChange={(e)=>setTask(e.target.value)}></input>

        <button onClick={createdata}>Create</button>

        <ul>
           {events.map((item)=>(
            <li key={item._id}> {item.title} 
            <button onClick={()=>deletetask(item._id)} >delete</button>
            </li>
           ))}
          
        </ul>
        </>
    )

}

export default App;
