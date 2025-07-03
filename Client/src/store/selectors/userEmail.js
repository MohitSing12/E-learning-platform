import { selector } from "recoil";
import { userState } from "../atoms/user";

export const userEmail=selector({
    key:"userEmaill",
    get:({get})=>{
        const state=get(userState);
        if(state){
            return state.userEmail
        }
        return ""
    }
    
})