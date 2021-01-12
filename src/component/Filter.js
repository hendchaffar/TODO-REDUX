  
import React from 'react'
import {useDispatch} from 'react-redux'
import { seeall, seedone, seeundone } from '../const/Action'

const Filter = () => {
    const dispatch = useDispatch()

    const seetout=()=>{
        dispatch(seeall())

    }
    const seeDo=()=>{
        dispatch(seedone())

    }
    const seeUd=()=>{
        dispatch(seeundone())

    }
    

    return (
        <div >
            <button className='filter' onClick={seetout}> all</button>
            <button className='filter' onClick={seeDo}> done</button>
            <button className='filter' onClick={seeUd}> undone</button>
        </div>
    )
}

export default Filter