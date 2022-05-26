import axios from "axios"
import { getCharacters, getCharacterById, resetDetail } from "../slices/characterSlice"

const URL="https://rickandmortyapi.com/api/character"


export const getAllCharacters=(api=URL)=>(dispatch)=>{
    axios(api)
    .then(response=> dispatch(getCharacters(response.data)))
    .catch(error=> console.error(error))
}

export const getSingleChar=(id)=>(dispatch)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response=> {
        console.log(response)
        return dispatch(getCharacterById(response.data))})
    .catch(error=> console.error(error))
}

export const reset=()=>{
        return resetDetail()
    }