import React from "react";
import { useState } from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


function AdminTaskList(props){
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    
 
    const handleInputTaskName =(task) =>{

        setTaskName(task);
    }

    const handleTaskDescription=(task)=>{

        setTaskDescription(task);

    }
    

    const updateTaskList = (event) =>{
        event.preventDefault();

        let taskItem ={};

        if(taskName !== "" || taskDescription !== ""){

        taskItem.name = taskName;
        taskItem.description = taskDescription;
        taskItem.startDate = startDate;
        taskItem.endDate = endDate;

       props.setAdminTaskList((prevList)=>[...prevList, taskItem]);
        setTaskName("");
        setTaskDescription("");
        }

        else{
            alert("These feilds cannot be empty!!");
        }
    }
     localStorage.setItem("adminData", JSON.stringify(props.adminTaskList));

   

    return(
        <form className="ticket-form">    
        <div className="input-fields">
        <h4>Ticket Creation</h4>
        
        <input type="text" id="task" value={taskName} placeholder="Task Name" onChange={(event)=>{handleInputTaskName(event.target.value)}}/>
        <textarea value={taskDescription} placeholder="description..." rows="7" cols="10" id="task-description" onChange={(event)=>{handleTaskDescription(event.target.value)}}/>
        {/* <select></select> */}
        </div>
       
       <DayPickerInput placeholder="Start Date" value={startDate} onDayChange={(day)=>{setStartDate(day)}} style={{marginRight: "30px", height: "30px"}} />
       <DayPickerInput placeholder="End Date" onDayChange={(day)=>{setEndDate(day)}} value={endDate} />

        <div className="btn-box">
        <button onClick={(event)=>{updateTaskList(event)}} id="create-btn">Create Task</button>
        <button id="del-btn">Delete</button>
        </div>

        </form>
    );
}

export default AdminTaskList;
