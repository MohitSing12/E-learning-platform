
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
                                let res = await axios.post("http://localhost:3000/admin/signin", {
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

        </div >
    )
}

export default Signin;