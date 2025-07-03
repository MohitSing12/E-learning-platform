import { Button, Card, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Courses() {
    const [courses, setCourses] = useState([]);

    const init = async () => {
        let res = await axios.get("http://localhost:3000/admin/courses", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setCourses(res.data.courses);
    }
    useEffect(() => {
        // fetch("http://localhost:3000/admin/courses", {
        //     method: "GET",
        //     headers: {
        //         "Authorization": "Bearer " + localStorage.getItem("token")
        //     }
        // }).then((res) => {
        //     return res.json();
        // }).then((data) => {
        //     setCourses(data.courses)
        //     console.log(data);
        // })

        init();
    }, []);

    return (<div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>

        {courses.map(course => {
            return <Course course={course} />
        })}
    </div>

    )
}
function Course(props) {
    const navigate = useNavigate();
    return (
        <Card style={{ border: "2px solid black", width: 300, margin: 10, minHeight: 200 }}>
            <Typography textAlign={"center"} variant="h5">{props.course.title}</Typography>
            <Typography textAlign={"center"} variant="h5"> {props.course.description}</Typography>
            <img src={props.course.imageLink} style={{ width: 300 }}></img>

            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                <Button variant="contained" size="large" onClick={() => {
                    navigate("/course/" + props.course._id);
                }} >
                    Edit
                </Button>
            </div>


        </Card>

    )
}

export default Courses;
