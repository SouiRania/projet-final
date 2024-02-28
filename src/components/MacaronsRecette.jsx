import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink,useParams } from 'react-router-dom'

function MacaronsRecette() {

    const {id}=useParams()
    const {macaronsList}=useSelector(state=>state.recetteReducer)
console.log(id)
  return (
    <div>
      <br/>
          <NavLink to="/Macarons"> <button style={{ position: 'absolute', left: '30px' ,padding:'10px',background:"#ffcd95",border:"#ffcd95",color:"#af5e01" }}><strong> Retour</strong></button></NavLink>
         <h1>{macaronsList[id].nom}</h1>
        <iframe width="853" height="480" src={macaronsList[id].vid}  title="recette des MACARONS facile et fait maison [saveur pistache]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br/><br/>
       
    </div>
  )
}

export default MacaronsRecette
