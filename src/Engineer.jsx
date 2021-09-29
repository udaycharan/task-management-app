import React from "react";
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

let myEngineerEventsList = JSON.parse(localStorage.getItem("eventData"));


function Engineer(props) {
  return(
    <>
    <header className="header-style" style={{color: "#fff", paddingLeft: "1rem"}}>
    <h2>Logo</h2>
    <p style={{fontSize: "1.5rem", fontWeight: "900", marginTop: "1rem"}}>Engineer Dashboard</p>
    <h3>Ticket Management System</h3>
    </header>

    <div className="admin-view" style={{display: "flex", flexDirection: "column"}}>
    <p style={{fontWeight: "800", fontSize: "large", background: "#1f3044", color: "#fff", padding: "1rem", width: "669px", margin: '3px'}}>Calendar</p>
      <Calendar
              localizer={localizer}
              events={myEngineerEventsList}
              startAccessor="start"
              endAccessor="end"
              style={{ width: 700, height: 500, boxShadow: "6px 6px 6px #BDC7C9", fontWeight: "900", background: "#87A7B3"}}/>
      
    </div>
    </>
  );
}

export default Engineer;