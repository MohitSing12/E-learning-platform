import { Typography } from '@mui/material';
import Button from '@mui/material/Button'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isUserLoadingState } from '../store/selectors/isUserLoading';
import { userEmailState } from '../store/selectors/userEmail';
import { userState } from '../store/atoms/user';
function Appbar() {
    const navigate = useNavigate();
    const userLoading = useRecoilValue(isUserLoadingState);
    const userEmail = useRecoilValue(userEmailState);
    const setUser = useSetRecoilState(userState)

    if (userLoading) {
        return <></>
    }


    if (userEmail) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                padding: 4,
                zIndex: 1
            }}>

                <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
                    navigate("/")
                }

                }>
                    <Typography variant={"h6"}>
                        Home</Typography>
                </div>

                <div style={{ padding: 5, display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <Button variant="text"
                            onClick={() => {
                                window.location = ("/AddCourse")
                            }}>Add Course</Button>
                        <Button variant="text"
                            onClick={() => {
                                window.location = ("/courses")
                            }}>Courses</Button>
                    </div>
                    <div style={{ marginRight: 5 }}>


                        <Button variant="contained"
                            onClick={() => {
                                localStorage.setItem("token", null)
                                setUser({
                                    isLoading: true,
                                    userEmail: null
                                })

                            }}>Logout</Button>
                    </div>



                </div>
            </div>
        )
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{ cursor: "pointer" }} onClick={() => {
                navigate("/")
            }} >

                <Typography >Welcome Admin</Typography>

            </div>

            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: 10 }}>
                    <Button variant="contained"
                        onClick={() => {
                            navigate("/signup")
                        }}>Signup</Button>
                </div>

                <div >
                    <Button variant="contained"
                        onClick={() => {
                            navigate("/signin")
                        }}>Signin</Button>
                </div>

            </div>
        </div>
    )

}
export default Appbar;
