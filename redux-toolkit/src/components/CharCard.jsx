import React from 'react'
import {NavLink} from "react-router-dom"

export const CharCard = ({name,img, id}) => {
  return (
    <div>
        <NavLink to={`/character/${id}`}>
        <p>
        {name}
        </p>
        </NavLink>
        <img src={img} alt={name} />
    </div>
  )
}
