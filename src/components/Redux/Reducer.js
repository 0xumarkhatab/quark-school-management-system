
import { configureStore } from "@reduxjs/toolkit";


export const initialState={

    USER:null,
    classList:null,




}

const reducer=(state=initialState,action)=>{
    console.log("action is ",action)
    switch (action.type) {
        case "SET__USER":
            return {
                ...state,
                USER : action.USER,
            }
        case "SET__USERTYPE":
            return {
                ...state,
                USERTYPE : action.USERTYPE,
            }

        case "CLEAR__STUDENTS":
            return{
                ...state,
                STUDENTSLIST:null,
                }
        case "SET__STUDENTSLIST":
            return {
                ...state,
                STUDENTSLIST:action.STUDENTSLIST
            }
        case "CLEAR__TEACHERS":
        return{
                ...state,
                TEACHERSLIST:null,
                }
        case "SET__TEACHERSLIST":
            return {
                ...state,
                TEACHERSLIST:action.TEACHERSLIST
            }
        
        case "CLEAR__CLASSES":
            return{
                    ...state,
                    CLASSESLIST:null,
                }
        case "SET__CLASSESLIST":
            return {
                ...state,
                CLASSESLIST:action.CLASSESLIST
            }
    
        case "CLEAR__STATE":
            return initialState
        
        default:
            break;
    }
}




export const store=configureStore({reducer:reducer});


