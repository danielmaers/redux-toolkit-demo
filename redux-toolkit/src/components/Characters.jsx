import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getAllCharacters } from '../store/actions/characterActions'
import { CharCard } from './CharCard'




export const Characters = () => {
    const dispatch= useDispatch()
    const {characters}= useSelector(state=>state.characters)
    const [apiPage, setApiPage]=useState(1)
    const URL="https://rickandmortyapi.com/api/character?page="    

    

    useEffect(()=>{
       dispatch( getAllCharacters(URL+apiPage))
    },[apiPage])

    function handlePage(e){
      if(isNaN( Number(e.target.name))){
        console.log("target value",e.target.value)          
        setApiPage(e.target.value)
      }else{
      setApiPage(apiPage+Number(e.target.name))
    }
    }
    
  return (
    <div>
        
        {characters.results&&characters.results.map((e,i)=><div key={i}><CharCard name={e.name} img={e.image} id={e.id} /></div>)}
      <button className={apiPage===1?"displayBtn":null} name="first" value="1" disabled={apiPage===1} onClick={(e)=>handlePage(e)} >{"<<"}</button>
      <button className={apiPage===1?"displayBtn":null} name={-1} disabled={!(apiPage-1)} onClick={(e)=>handlePage(e)} >{"<"}</button>
      <button>{apiPage}</button>
      <button className={apiPage==42?"displayBtn":null} name={1} disabled={apiPage==42} onClick={(e)=>handlePage(e)} >{">"}</button>
      <button  className={apiPage==42?"displayBtn":null} name="last" value="42" disabled={apiPage==42} onClick={(e)=>handlePage(e)} >{">>"}</button>
    </div>
  )
}
