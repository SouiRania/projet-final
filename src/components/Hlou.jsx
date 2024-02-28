import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import HlouItem from './HlouItem'
import { filterHlou } from '../redux/recetteSlice'

export default function Hlou() {
  const {hlouList}=useSelector(state=>state.recetteReducer)
  const dispatch=useDispatch()
  const filterList=(e)=>{
        dispatch(filterHlou(e.target.value))
  }

  
  return (
    <div>
    <section>
    <div className='cher'>
       <input style={{background:"beige",width:"300px", textAlign:"center"}} type='text' placeholder='chercher une recette' onChange={filterList}></input>
       </div>
  <div className="Cards">
    {hlouList.map((e,index)=><NavLink to={"/Hlou/"+index}><HlouItem hlo={e}/></NavLink>)}
  
  </div>
  </section>
  </div>
  )
}
