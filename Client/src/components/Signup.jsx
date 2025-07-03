import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import React from "react";
import { userState } from '../store/atoms/user';



function Signup() {
    const [email, setemail] = useRecoilState(userState)
    const [password, setpassword] = useState("")
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
                                const response = await axios.post("http://localhost:3000/user/signup", {
                                    username: email,
                                    password: password
                                })
                                let data = response.data;
                                localStorage.setItem("token", data.token);
                                // window.location = ("/courses");
                                navigate("/courses")
                            }}
                        >Signup</Button>
                    </div>

                </Card>

            </center>
            <div>

                <footer class="bg-gray-900 text-white py-6 mt-20">
                    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                        {/* <!-- Left: Logo --> */}
                        <div class="mb-4 md:mb-0">
                            <h1 class="text-xl font-bold">E-simplyfy</h1>
                            <p class="text-sm text-gray-400">© 2025 All rights reserved.</p>
                        </div>

                        {/* <!-- Center: Navigation Links --> */}
                        <div class="flex space-x-6 text-sm">
                            <a href="#" class="hover:text-gray-400" onClick={() => { navigate("/") }}>Home</a>
                            <a href="#" class="hover:text-gray-400">About</a>
                            <a href="#" class="hover:text-gray-400">Services</a>
                            <a href="#" class="hover:text-gray-400">Contact</a>
                        </div>

                        {/* <!-- Right: Social Media Icons --> */}
                        <div class="flex space-x-4">
                            <a href="#" class="hover:text-gray-400"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="hover:text-gray-400"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="hover:text-gray-400"><i class="fab fa-instagram"></i></a>
                        </div>

                    </div>
                </footer>

            </div>

        </div>
    )
    
}

export default Signup;