import React from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
// import { userEmail } from "../store/selectors/userEmail";
import { useRecoilValue } from "recoil";



function Landing() {
    const navigate = useNavigate();
    // const email = useRecoilValue(userEmail);
    // console.log(email)
    const email=null;
    
    return (
        <div >
            <div className="mx-110 m-20 flex flex-col ">
                <p className="font-bold text-8xl text-wrap whitespace-nowrap">
                    E-simplyfy
                </p>

                <p className="font-bold text-4xl m-4">
                    A place to learn and Grow
                </p>

            </div>

            <div >

                <img className="mx-auto relative  flex flex-col max-w-lg items-center w-200  rounded-xl bg-#eeeeee shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 "
                    src="https://imgs.search.brave.com/hbMAC7UWr-ggGW2awk6-SCfHQDjvPjvloc6mPRX9zuk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sYXB0b3Atd2l0/aC1ob21lcGFnZS1l/ZHVjYXRpb25hbC13/ZWJzaXRlLWRpc3Bs/YXktYmVpbmctdXNl/ZC1ieS15b3VuZy1m/ZW1hbGUtc3R1ZGVu/dC1ieS1kZXNrXzI3/NDY3OS01ODg5Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ"
                    alt=""
                />
                {!email&& <div className="m-2">
                    <button class=" mx-150  bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={() => { navigate("/signup") }}>
                        Signup
                    </button>
                    <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={() => { navigate("/signin") }}>
                        Signin
                    </button>
                </div>}
               
                
                




            </div>
            <div className="flex">
                <Card style={{
                    border: "2px solid black",
                    width: 300,
                    margin: 10,
                    minHeight: 200,
                    borderRadius: 20,
                    marginRight: 50,
                    marginTop: 110,
                    paddingBottom: 15,
                    zIndex: 2
                }}>
                    <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />
                        <div class="space-y-2 text-center sm:text-left">
                            <div class="space-y-0.5">
                                <p class="text-lg font-semibold text-black">Erin Lindford</p>
                                <p class="font-medium text-gray-500">Product Engineer</p>
                            </div>
                            <p>Best course i have seen</p>
                        </div>
                    </div>
                </Card>
                <Card style={{
                    border: "2px solid black",
                    width: 300,
                    margin: 10,
                    minHeight: 200,
                    borderRadius: 20,
                    marginRight: 50,
                    marginTop: 110,
                    paddingBottom: 15,
                    zIndex: 2
                }}>
                    <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />
                        <div class="space-y-2 text-center sm:text-left">
                            <div class="space-y-0.5">
                                <p class="text-lg font-semibold text-black">Erin Lindford</p>
                                <p class="font-medium text-gray-500">Product Engineer</p>
                            </div>
                            <p>Best course i have seen</p>
                        </div>
                    </div>
                </Card>
                <Card style={{
                    border: "2px solid black",
                    width: 300,
                    margin: 10,
                    minHeight: 200,
                    borderRadius: 20,
                    marginRight: 50,
                    marginTop: 110,
                    paddingBottom: 15,
                    zIndex: 2
                }}>
                    <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />
                        <div class="space-y-2 text-center sm:text-left">
                            <div class="space-y-0.5">
                                <p class="text-lg font-semibold text-black">Erin Lindford</p>
                                <p class="font-medium text-gray-500">Product Engineer</p>
                            </div>
                            <p>Best course i have seen</p>
                        </div>
                    </div>
                </Card>
                <Card style={{
                    border: "2px solid black",
                    width: 300,
                    margin: 10,
                    minHeight: 200,
                    borderRadius: 20,
                    marginRight: 50,
                    marginTop: 110,
                    paddingBottom: 15,
                    zIndex: 2
                }}>
                    <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />
                        <div class="space-y-2 text-center sm:text-left">
                            <div class="space-y-0.5">
                                <p class="text-lg font-semibold text-black">Erin Lindford</p>
                                <p class="font-medium text-gray-500">Product Engineer</p>
                            </div>
                            <p>Best course i have seen</p>
                        </div>
                    </div>
                </Card>

            </div>


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
                            <a href="#" class="hover:text-gray-400" onClick={()=>{navigate("/")}}>Home</a>
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


    );
}
export default Landing;


{/* <div className="mx-auto relative m-30 flex flex-col max-w-lg items-center w-200  rounded-xl bg-#eeeeee shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"></div> */ }