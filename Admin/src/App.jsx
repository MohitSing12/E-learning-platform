import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./components/Signup.jsx"
import './App.css'
import Appbar from "./components/Appbar.jsx"
import Signin from "./components/Signin.jsx"
import AddCourse from "./components/AddCourse.jsx"
import Courses from "./components/Courses.jsx"
import Course from "./components/Course.jsx"
import Landing from "./components/Landing.jsx"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from 'recoil';
import { userState } from "./store/atoms/user.js"
import { useEffect } from "react"
import axios from "axios"

const App=()=> {


  return (
    <div style={{ backgroundColor: "#eeeeee", width: "100vw", height: "200vh" }}>
      <RecoilRoot>
        <Router>
          <Appbar />
          <InitUser />
          <Routes>
            <Route path="/" element={<Landing />}></Route >
            <Route path="/AddCourse" element={<AddCourse />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/course/:courseId" element={<Course />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </Router>
      </RecoilRoot>

    </div>
  )
}
function InitUser() {

  const setUser = useSetRecoilState(userState);

  const init = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admin/me", {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      if (response.data.username) {
        setUser({
          userEmail: response.data.username,
          isLoading: false
        }
        );

      }
      else {
        setUser({
          userEmail: null,
          isLoading: false
        }
        );
      }
    }
    catch (e) {
      setUser({
        userEmail: null,
        isLoading: false
      }
      );
    }
  };
  useEffect(() => {

    // function callback2(data) {
    //     console.log(data);
    //     console.log(data.username)
    //     if (data.username) {
    //         SetUserEmail(data.username);
    //     }
    // }
    // function callback1(res) {
    //     res.json().then(callback2);
    // }
    // fetch("http://localhost:3000/admin/me", {
    //     method: "GET",
    //     headers: {
    //         "Authorization": "Bearer " + localStorage.getItem("token")
    //     }
    // }).then(callback1)
    init();
  }, [])


  return <></>
}

export default App
