import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'

function HlouRecette() {
    const {id}=useParams()
    const {hlouList}=useSelector(state=>state.recetteReducer)

  return (
    <div>
        <br/>
      <NavLink to="/Hlou"> <button style={{ position: 'absolute', left: '30px' ,padding:'10px',background:"#ffcd95",border:"#ffcd95",color:"#af5e01"}}> <strong>Retour</strong></button></NavLink>
         <h1>{hlouList[id].nom1}</h1>
         <span><strong>{hlouList[id].description}</strong></span><br/><br/>
        <iframe width="853" height="480" src={hlouList[id].vid1}  title="recette des hlou facile et fait maison [saveur pistache]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br/><br/>
    </div>
  )
}

export default HlouRecette
