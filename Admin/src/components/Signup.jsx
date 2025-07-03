import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    const navigate=useNavigate();
    return (
        <div >
            <center>
                <div style={{
                    paddingTop: 150,
                    marginBottom: 10
                }}>
                    <Typography variant="h5" component="h2">
                        Hello! welcome to the signup page!
                    </Typography>


                </div>
            </center>
            <center>
                <Card variant="outlined" style={{ width: 400, padding: 20 }}>
                    <TextField
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                        fullWidth={true}
                        id="outlined-basic" label="Email" variant="outlined" />
                    <br />
                    <br />
                    <TextField
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        fullWidth={true}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                    />
                    <br />
                    <br />
                    <div style={{ display: 'flex' }}>
                        <Button
                            size={"large"}
                            variant="contained"
                            onClick={async () => {
                                // function callback2(data){
                                //     console.log(data);
                                //     localStorage.setItem("token",data.token);
                                // }
                                // function callback1(res){
                                //     res.json().then(callback2);
                                // }
                                // fetch("http://localhost:3000/admin/signup",{
                                //     method:"POST",
                                //     body:JSON.stringify({
                                //         username:email,
                                //         password:password
                                //     }),
                                //     headers:{
                                //         "Content-type":"application/json"
                                //     }
                                // }).then(callback1)
                                const response = await axios.post("http://localhost:3000/admin/signup", {
                                    username: email,
                                    password: password
                                })
                                let data = response.data;
                                localStorage.setItem("token", data.token);
                                // window.location = ("/efgerg");
                                navigate("/courses")
                            }}
                        >Signup</Button>
                    </div>

                </Card>

            </center>

        </div>
    )
}

export default Signup;