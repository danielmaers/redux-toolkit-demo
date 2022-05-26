import {createSlice} from "@reduxjs/toolkit"
//import axios from "axios"

export const characterSlice=createSlice({
    name: "characters",
    initialState:{
            characters:[],
            detail:{}
        },
    reducers:{
        getCharacters: (state, action)=>{
            state.characters=action.payload
        },
        getCharacterById: (state, action)=>{
            state.detail=action.payload
        },
        resetDetail:(state, action)=>{
            state.detail={}
        }
    }
})

export const {getCharacters, getCharacterById, resetDetail} = characterSlice.actions

export default characterSlice.reducer;

// export const getAllCharacters=()=>(dispatch)=>{
//     axios("https://rickandmortyapi.com/api/character")
//     .then(response=> dispatch(getCharacters(response.data.results)))
//     .catch(error=> console.error(error))
// }

// const initialState={
//     characters:[]
// }

// export default function characterSlice(state=initialState, {type, payload}){
//     switch(type){
//         case "A":
//             return state
//             default: return state
//         }
// }