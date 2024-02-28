import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GateauxItem from './GateauxItem'
import { filterGateau } from '../redux/recetteSlice'
import './GateauxItem.css'
import { NavLink } from 'react-router-dom'

function Gateaux() {
    const {gateauxList}=useSelector(state=>state.recetteReducer)
    const dispatch=useDispatch()
    const filterList=(e)=>{
          dispatch(filterGateau(e.target.value))
    }
  return (
    <div>
      
      <section>
      <div className='cher'>
         <input style={{background:"beige",width:"300px", textAlign:"center"}} type='text' placeholder='chercher une recette' onChange={filterList}></input>
         </div>
    <div className="Cards">
      {gateauxList.map((e,index)=><NavLink to={"/"+index}><GateauxItem gato={e}/></NavLink>)}
    
    </div>
    </section>
    </div>
  )
}

export default Gateaux
