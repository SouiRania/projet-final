import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MacaronsItem from './MacaronsItem'
import './GateauxItem.css'
import { filterMacaron } from '../redux/recetteSlice'
import { NavLink } from 'react-router-dom'



function Macarons() {
    const {macaronsList}=useSelector(state=>state.recetteReducer)
    const dispatch=useDispatch()
    const filterList=(e)=>{
          dispatch(filterMacaron(e.target.value))
    }
  return (
    <div>
     <section>
     <div className='cher'>
         <input style={{background:"beige",width:"300px", textAlign:"center"}} type='text' placeholder='chercher une recette' onChange={filterList}></input>
         </div>
      <div className="Cards">
      
      {macaronsList.map((e,index)=><NavLink to={"/Macaron/"+index}><MacaronsItem mac={e}/></NavLink>)}
    </div>
    </section>
    </div>
  )
}

export default Macarons
