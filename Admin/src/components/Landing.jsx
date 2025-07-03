import React from 'react'
import { Button, Card, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { userEmailState } from '../store/selectors/userEmail';
import { isUserLoadingState } from '../store/selectors/isUserLoading';
import { useRecoilValue } from 'recoil';
function Landing() {
    const userEmail = useRecoilValue(userEmailState);
    const isLoading = useRecoilValue(isUserLoadingState)
    const navigate = useNavigate();
    return (
        <div>
            <Grid container style={{ padding: "5vw" }}>
                <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
                    <div style={{marginTop:100}}>                 
                    <Typography variant='h2'>Welcome to Coursera!</Typography>
                    <Typography variant='h6'>A place to learn and Grow</Typography>
                    {!userEmail && !isLoading && <div style={{ display: "flex", marginTop: 20 }}>
                        <div style={{ marginRight: 10 }}>
                            <Button variant="contained" size={"Large"}
                                onClick={() => {
                                    navigate("/signup")
                                }}
                            >Sign Up</Button>
                        </div>
                        <div>
                            <Button variant="contained" size={"Large"}
                                onClick={() => {
                                    navigate("/signin")
                                }}
                            >Sign In</Button>
                        </div>


                    </div>}
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20}}>
                    <img src={"https://imgs.search.brave.com/WdsQgO8oVDbr37zikAZ3VFx7idW6VeWpWrdF61HAHCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXJh/c2VlLmNvbS9pbWFn/ZXMvMTM3YzIzOTlk/YTE3OWJhZC02MTku/d2VicA"} width={"100%"} />
                </Grid>

            </Grid>

        </div>
    )
}

export default Landing