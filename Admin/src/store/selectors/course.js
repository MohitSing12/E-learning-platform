import {courseState} from "../atoms/course"
import { selector } from "recoil"

export const isLoading=selector({
    key:"loadingstate",
    get:({get})=>{
        const state=get(courseState);
        return state.isLoading
    }
})
//If i want to return the course details then the selector would be 
export const courseDetails=selector({
    key:"courseDetails",
    get:({get})=>{
        const state=get(courseState);//courseState is our Atom!! And state will contain the elements of courseState
        if(state.course){
            return state.course;
        }
       return ""
    }
})
export const courseTitle=selector({
    key:"courseTitle",
    get:({get})=>{
        const state=get(courseState);
        if(state.course){
            return state.course.title
        }
        return ""
       
    }
})




export const courseDescription=selector({
    key:"courseDescription",
    get:({get})=>{
        const state=get(courseState);
        if(state.course){
            return state.course.description
        }
        return ""
       
    }
})
export const courseImage=selector({
    key:"courseImage",
    get:({get})=>{
        const state=get(courseState);
        if(state.course){
            return state.course.imageLink
        }
        return ""
       
    }
})
export const coursePrice=selector({
    key:"coursePrice",
    get:({get})=>{
        const state=get(courseState);
        if(state.course){
            return state.course.price
        }
        return ;
    }
})
