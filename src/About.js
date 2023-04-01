import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './About.css'

function About()
{
    const navigate= useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const date = searchParams.get('date');
    return (
        <div className="about">
            <div className="Header">
            <h1>Attendance Page</h1>
            </div>
            <div className="button">
                <button onClick={()=>navigate("/home")}>BACK</button>
            </div>
            <div>
            <h3>Mark Attendance for: {date}</h3>
            </div>
            <div className="table">
                <table border="1" align="center" width="1500px">
                    <tr>
                        <td>Roll No</td>
                        <td>Name</td>
                        <td>PRN No</td>
                        <td>Attendance</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Ram Dorak</td>
                        <td>12210012</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mardav Dorle</td>
                        <td>NA</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>44</td>
                        <td>Kavyansh Gandhi</td>
                        <td>NA</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default About;
