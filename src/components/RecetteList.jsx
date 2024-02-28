import React from 'react'
import { useSelector  } from 'react-redux'
import RecetteItem from './RecetteItem'
import './Recette.css'

function RecetteList() {

    const {recetteList}= useSelector(state=>state.recetteReducer)
   
  return (
    <div className='Rece'>
    <img src="https://static.pratique.fr/images/unsized/le/les-ustensiles-indispensables-pour-faire-de-la-patisserie-istock-com-fcafotodigital-209-1521537984.jpg" alt="image is not available"></img>
    <br/>
    <div >
      <section>
      <strong><span style={{fontFamily:"cursive",color: "#b85505",fontSize:"30px"}}>El RAYHANE</span> cuisine</strong> 
      <br/>
      <p>Quoi de mieux que de finir un repas avec un bon et beau gâteau à partager à table ? 
      Les occasions ne manquent pas<br/>  pour réaliser une recette de gâteau facile et originale. Goûter, pot de départ et bien sûr, 
      l'incontournable gâteau <br/> d'anniversaire ! Les recettes les plus simples de gâteaux sont souvent les plus appréciées.
      <br/>Avec un gâteau au chocolat, au yaourt ou aux pommes, vous êtes certains de faire plaisir à tout le monde.<br/>  
        Si vous avez l'âme d'un apprenti pâtissier, lancez-vous dans l'élaboration de gâteaux plus élaborés, tels les fraisiers <br/>et entremets mousseux.
        En suivant nos recettes bien détaillées, vous n'aurez aucune difficulté à mener l'opération à bien. <br/>Et quel fierté de dire "c'est moi qui l'ai fait !"</p>
         <div className="Cardss">
      {recetteList.map(e=><RecetteItem item={e}></RecetteItem>)}
      </div>
      </section>
    </div>
    </div>
  )
}

export default RecetteList
