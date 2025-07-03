import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { useState } from "react";
import axios from "axios"

function AddCourse() {

  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  return (<div style={{ display: "flex", justifyContent: "center",minHeight:"80vh",flexDirection:"column" }}>
    <div style={{ display: "flex", justifyContent: "center"}}>
    <Card variant={"outlined"} style={{ width: 400, padding: 20,marginTop:30,height:"100%" }}>

      <TextField
      style={{marginBottom: 10}}
        onChange={(e) => {
          settitle(e.target.value)
        }}
        fullWidth={true}
        label="Title"
        variant="outlined"
      />

      <TextField
      style={{marginBottom: 10}}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        fullWidth={true}
        label="Description"
        variant="outlined"
      />
      <TextField
      style={{marginBottom: 10}}
        onChange={(e) => {
          setImage(e.target.value)
        }}
        fullWidth={true}
        label="ImageLink"
        variant="outlined"
      />
      <TextField
      style={{marginBottom: 10}}
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
          // function callback2(data){
          //   console.log(data)
          // alert("course added!!")
          // }  
          // function callback1(res){
          //   res.json().then(callback2)
          // }
          // fetch("http://localhost:3000/admin/courses",{
          //   method:"POST",
          //   body:JSON.stringify({
          //       title:title,
          //       description:description,
          //       imageLink:Image,
          //       published:true
          //   }),
          //   headers:{
          //       "Content-type":"application/json",
          //       "Authorization":"Bearer "+localStorage.getItem("token")
          //   }
          // }).then(callback1)

          await axios.post("http://localhost:3000/admin/courses", {
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
          alert("course added!!")
        }}

      >Add Course</Button>
    </Card>
    </div>
  </div>
  )
}
export default AddCourse;