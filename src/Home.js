import React from "react";
import { useNavigate } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home()
{
    const [date, setDate] = useState(new Date())
    const navigate= useNavigate();
    const dateString = date.toISOString().substring(0, 10);
    return (
        <div className="home">
            <div className="Header">
            <h1>Attendance Marking Website</h1>
            </div>
            <div className="calendar" align="center">
             <Calendar onChange={setDate} value={date}/>
             Selected date: {date.toDateString()}
            <br /><Link to={`/about?date=${dateString}`}>Mark Attendance</Link>
            </div>
        </div>
    )
}

export default Home;
