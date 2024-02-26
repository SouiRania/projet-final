import React from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import RecetteItem from './RecetteItem'
import { filterRecette } from '../redux/recetteSlice'
import { NavLink } from 'react-bootstrap'


function RecetteList() {

    const {recetteList}= useSelector(state=>state.recetteReducer)
    const dispatch=useDispatch()
    const filterList=(e)=>{
          dispatch(filterRecette(e.target.value))
    }
  return (
    <div style={{display:"flex" ,alignItems:"center" ,gap:"2vw",flexDirection:"column"}}>
        <div>

         <input type='text' placeholder='search a recette' onChange={filterList}></input>
         </div>
        <div style={{display:"flex" ,justifyContent:"center" ,gap:"2vw"}}>
      {recetteList.map((e,index)=><NavLink to={"/"+index}><RecetteItem item={e}></RecetteItem></NavLink>)}
      </div>
    </div>
  )
}

export default RecetteList
