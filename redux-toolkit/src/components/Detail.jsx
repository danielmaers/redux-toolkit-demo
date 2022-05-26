import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { getSingleChar, reset } from '../store/actions/characterActions'

export const Detail = () => {
    const {id}= useParams()
    const dispatch= useDispatch()
    const {detail}= useSelector(state=>state.characters)
    
    useEffect(()=>{
        dispatch(getSingleChar(id))
        return ()=>{
            dispatch(reset())
        }
    },[dispatch, id])
console.log(detail)
  return (
    <div>
        {Object.keys(detail).length>0&&<>
        <p>{detail.name}</p>
        <img src={detail.image} alt={detail.name} />
        <p>Gender: {detail.gender}</p>
        <p>Specie: {detail.species}</p>
        <p>Status: {detail.status}</p>
        <p>Origin: {detail.origin.name}</p>
        <p>Location: {detail.location.name}</p>
        </>}
    </div>
  )
}
