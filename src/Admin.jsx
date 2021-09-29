import React from "react";
import AdminTaskList from "./AdminTaskList";
import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek  from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";



const locales = {
  "en-IN": require("date-fns/locale/en-IN") 
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});




function Admin() {

  const [adminTaskList, setAdminTaskList] = useState([]);
  const [isGridClicked, setClickHandler]  = useState(false);
  

  let myEventsList =[];

  
const getEvents=()=>{
 
  
  for(let ele of adminTaskList){
      let event  = {};

      event.title = ele.name;
      event.start = ele.startDate;
      event.end = ele.endDate;
      myEventsList.push(event);
  
  }
  
  localStorage.setItem("eventData", JSON.stringify(myEventsList));
}
getEvents();



const handleChange= (event)=>{

  let element = event.target;

  if(element.className === "rbc-day-bg"){
    setClickHandler(!isGridClicked);
  }
}


  return (
    <>
    <header className="header-style" style={{color: "#fff", paddingLeft: "1rem"}}>
    <h2>Logo</h2>
    <p style={{fontSize: "1.5rem", fontWeight: "900", marginTop: "1rem"}}>Admin Dashboard</p>
    <h3>Ticket Management System</h3>
    </header>
    
      
     <div className="admin-view" onClick={handleChange}>
      <div style={{margin: "1.5rem"}}>
        <p style={{fontWeight: "800", fontSize: "large", background: "#1f3044", color: "#fff", padding: "1rem", width: "96%", margin: '3px'}}>Calendar</p>
        <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ width: 700, height: 500, boxShadow: "6px 6px 6px #BDC7C9", fontWeight: "900", background: "#87A7B3"}}
      />
      </div>

      {isGridClicked && <AdminTaskList adminTaskList={adminTaskList} setAdminTaskList={setAdminTaskList} getEvents={getEvents}/>}
  
  </div>
  </>
  );

}

export default Admin;