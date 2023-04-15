import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './About.css';
import './Checkbox';
import Checkbox from "./Checkbox";

function About()
{

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);

    const checkboxData = {
        present: true,
        absent: false,
      };
      
      fetch('/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkboxData),
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.error(error)); 

    function handleCheckbox1Change(event) {
    setIsChecked1(event.target.checked);
    console.log('3 -'+(event.target.checked ? "Present" : "Absent"));
    }

    function handleCheckbox2Change(event) {
        setIsChecked2(event.target.checked);
        console.log('4 -'+(event.target.checked ? "Present" : "Absent"));
    }

    function handleCheckbox3Change(event) {
        setIsChecked3(event.target.checked);
        console.log('44 -'+(event.target.checked ? "Present" : "Absent"));
    } 

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
                <table border="1" align="center" width="1250px">
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
                        <td> 
                        <Checkbox checkboxNo="3" date={date}/>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mardav Dorle</td>
                        <td>NA</td>
                        <td>
                        <Checkbox checkboxNo="4" date={date}/>
                        </td>
                    </tr>
                    <tr>
                        <td>44</td>
                        <td>Kavyansh Gandhi</td>
                        <td>NA</td>
                        <td> 
                        <Checkbox checkboxNo="44" date={date}/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default About;
