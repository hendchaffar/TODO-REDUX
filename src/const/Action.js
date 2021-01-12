import {ADDTASK,DELATE,COMPLETE,EDITTASK,SEEALL,SEEDONE,SEEUNDONE  } from "./ActionType";

export const addtask=(newTask)=>{
    return{
type:ADDTASK,
payload:newTask
    }
}

export const delatetask=(id)=>{
    return{
type:DELATE,
payload:id
        }    
}
export const completetask=(id)=>{
    return{
type:COMPLETE,
payload:id
        }    
}
export const edittask=(newTask)=>{
    return{
type:EDITTASK,
payload:newTask
        }    
}

export const seeall=()=>{
    return{
type:SEEALL,
        }    
}
export const seedone=()=>{
    return{
type:SEEDONE,
        }    
}
export const seeundone=()=>{
    return{
type:SEEUNDONE,
        }    
}
