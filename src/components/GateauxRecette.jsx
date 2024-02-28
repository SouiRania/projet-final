import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'

function GateauxRecette() {

    const {id}=useParams()
    const {gateauxList}=useSelector(state=>state.recetteReducer)
    
  return (
    <div >
   <br/>
    <NavLink to="/Gateaux"> <button style={{ position: 'absolute', left: '30px' ,padding:'10px',background:"#ffcd95",border:"#ffcd95",color:"#af5e01"}}><strong>Retour</strong></button></NavLink>
    <h1>{gateauxList[id].name}</h1><br/>
    <iframe width="853" height="480" src={gateauxList[id].video} title="Recette de moelleux pistache au goût de rose" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <br/><br/>
    
    <div className="Igred">
    <h1>Les ingrédients</h1><br/>
    <p style={{textAlign:"justify"}}>{gateauxList[id].ingredients.map(e=><p>{e}</p>)}</p>
    </div>
    </div>
  )
}

export default GateauxRecette
//["aaa","bbb","ccc"] 