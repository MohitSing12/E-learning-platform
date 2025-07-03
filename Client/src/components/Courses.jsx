import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Typography } from "@mui/material";


function Courses() {
    const [courses, setCourses] = useState([]);
    const init = async () => {
        let res = await axios.get("http://localhost:3000/user/courses", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(res)
        setCourses(res.data.courses)
        console.log(courses);
       
    }
    useEffect(() => {
        init()
    }, [])
    
    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop:90}}>

{courses.map(course=>{
    return <Course course={course}/>
})}

        </div>
    )
}
function Course(props){
    const navigate = useNavigate();
    return (
        <Card style={{ border: "2px solid black", width: 300, margin: 10, minHeight: 200 }}>
            <Typography textAlign={"center"} variant="h5">{props.course.title}</Typography>
            <Typography textAlign={"center"} variant="h5"> {props.course.description}</Typography>
            <img src={props.course.imageLink} style={{ width: 300 }}></img>

            


        </Card>

    )
}
export default Courses;