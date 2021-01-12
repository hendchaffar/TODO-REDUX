import React from 'react'
import {useSelector} from 'react-redux'
import Task from './Task'

function ListTask() {
    const  tasks = useSelector(state => state.tasks)
    
    return (
        <div>
        {tasks.map((el,i) => <Task el={el} key={i}/>)}
        </div>
    )
}

export default ListTask
