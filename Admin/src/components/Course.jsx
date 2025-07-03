import { Button, Card, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import Grid from '@mui/material/Grid';
import { courseState } from "../store/atoms/course"
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { courseDescription, courseImage, coursePrice, courseTitle, isLoading } from "../store/selectors/course";
import { Loading } from "./Loading";

function Course() {
    let { courseId } = useParams();
    const setCourse = useSetRecoilState(courseState);
    const courseLoading = useRecoilValue(isLoading);
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
        axios.get("http://localhost:3000/admin/course/" + courseId, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }

        }).then((res) => {

            setCourse({ isLoading: false, course: res.data.course })
        }).catch((e) => {
            setCourse({ isLoading: true, course: null })
        })

    }, []);

    // let course = null;

    // for (let i = 0; i < courses.length; i++) {

    //     if (courses[i]._id == courseId) {

    //         course = courses[i];
    //         console.log(course)
    //     }

    // }

    if (courseLoading) {
        return <Loading />
    }
    return (
        <div>
            <GrayTopper />
            <Grid container>
                <Grid item="true" lg={8} md={12} sm={12}>
                    <UpdateCard />
                </Grid>
                <Grid item="true" lg={4} md={12} sm={12}>
                    <CourseCard />
                </Grid>
            </Grid>

        </div>
    )
}

function GrayTopper() {
    const title = useRecoilValue(courseTitle);
    return <div style={{ height: 250, background: "#212121", width: "100vw", top: 0, zIndex: 0, marginBottom: -250 }}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <div>
                <Typography variant="h3" textAlign={"center"} style={{ color: "white", fontWeight: 600 }}>{title}</Typography>
            </div>
        </div>
    </div>
}

function UpdateCard() {
    // const course = props.course;

    const [courseDetails, setCourse] = useRecoilState(courseState);
    const [title, settitle] = useState(courseDetails.course.title);
    const [description, setDescription] = useState(courseDetails.course.description);
    const [Image, setImage] = useState(courseDetails.course.imageLink);
    const [price, setPrice] = useState(courseDetails.course.price);


    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            <Card variant={"outlined"} style={{ maxWidth: 600, marginTop: 200 }}>
                <div style={{ padding: 20 }}>
                    <Typography style={{ marginBottom: 10 }}>Update course details</Typography>
                    <TextField
                        value={title}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => {
                            settitle(e.target.value)
                        }}
                        fullWidth={true}
                        label="Title"
                        variant="outlined"
                    />

                    <TextField
                        value={description}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        fullWidth={true}
                        label="Description"
                        variant="outlined"
                    />
                    <TextField
                        value={Image}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => {
                            setImage(e.target.value)
                        }}
                        fullWidth={true}
                        label="ImageLink"
                        variant="outlined"
                    />
                    <TextField
                        value={price}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => {
                            setPrice(e.target.value)
                        }}
                        fullWidth={true}
                        label="Price"
                        variant="outlined"
                    />

                    <Button
                        size={"Large"}
                        variant="contained"
                        onClick={async () => {
                            // function callback2(data) {
                            //     // console.log(data)
                            //     alert("course updated!!")
                            //     let updatedCourse = [];


                            //     updatedCourse.push({
                            //         id: course._id,
                            //         title: title,
                            //         description: description,
                            //         imageLink: Image
                            //     })


                            //     setCourse(updatedCourse)
                            // }
                            // function callback1(res) {
                            //     res.json().then(callback2)
                            // }
                            // fetch("http://localhost:3000/admin/courses/" + course._id, {
                            //     method: "PUT",
                            //     body: JSON.stringify({
                            //         title: title,
                            //         description: description,
                            //         imageLink: Image,
                            //         published: true
                            //     }),
                            //     headers: {
                            //         "Content-type": "application/json",
                            //         "Authorization": "Bearer " + localStorage.getItem("token")
                            //     }
                            // }).then(callback1)

                            axios.put("http://localhost:3000/admin/courses/" + courseDetails.course._id, {
                                title: title,
                                description: description,
                                imageLink: Image,
                                published: true,
                                price
                            }, {
                                headers: {
                                    "Content-type": "application/json",
                                    "Authorization": "Bearer " + localStorage.getItem("token")
                                }
                            });
                            let updatedCourse = {
                                _id: courseDetails.course._id,
                                title: title,
                                description: description,
                                imageLink: Image,
                                price
                            }

                            setCourse({
                                isLoading: false, course: updatedCourse
                            })
                        }}

                    >Update Course</Button>
                </div>
            </Card>
        </div>

    )
}
function CourseCard() {
    const title = useRecoilValue(courseTitle)
    const description = useRecoilValue(courseDescription);
    const image = useRecoilValue(courseImage);
    // const price = useRecoilValue(coursePrice)
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 50, width: "100% " }}>
            <Card style={{
                border: "2px solid black",
                width: 300,
                margin: 10,
                minHeight: 200,
                borderRadius: 20,
                marginRight: 50,
                paddingBottom: 15,
                zIndex: 2
            }}>
                <img src={image} style={{ width: 300 }}></img>
                <Typography textAlign={"center"} variant="h5">{title}</Typography>
                <Typography textAlign={"center"} variant="h5"> {description}</Typography>
                <Price />

            </Card>
        </div>
    )

}
function Price() {

    const price = useRecoilValue(coursePrice);
    return <>
        <Typography variant="subtitle2" style={{ color: "gray" }}>
            Price
        </Typography>
        <Typography variant="subtitle1">
            <b>Rs {price} </b>
        </Typography>
    </>
}
export default Course;