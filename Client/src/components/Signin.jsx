
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useSetRecoilState } from 'recoil';
import { userState } from '../store/atoms/user';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useSetRecoilState(userState);
    const navigate = useNavigate();
    return (
        <div >
            <center>
                <div style={{
                    paddingTop: 150,
                    marginBottom: 10
                }}>
                    <Typography variant="h5" component="h2">
                        Welcome back! Please sign in below.
                    </Typography>


                </div>
            </center>
            <center>
                <Card variant="outlined" style={{ width: 400, padding: 20 }}>
                    <TextField
                        fullWidth={true}
                        id="outlined-basic" label="Email" variant="outlined"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <br />
                    <br />
                    <TextField
                        fullWidth={true}
                        id="outlined-basic" label="Password" variant="outlined" type="password"

                        onChange={(val) => {
                            setPassword(val.target.value)
                        }}
                    />
                    <br />
                    <br />
                    <div style={{ display: 'flex' }}>
                        <Button variant="contained"
                            onClick={async () => {
                                let res = await axios.post("http://localhost:3000/user/login", {
                                    username: email,
                                    password: password
                                })
                                let data = res.data;
                                console.log(data)
                                localStorage.setItem('token', data.token)
                                setUser({
                                    isLoading: false,
                                    userEmail: email
                                })
                                navigate('/courses')
                            }

                            }

                        >SignIn</Button>
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

        </div >
    )
}

export default Signin;