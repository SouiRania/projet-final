import { createSlice } from "@reduxjs/toolkit";

const initialState={
    recetteList:[
        {tilte:'Gateaux', img:"https://www.plantafin.fr/-/media/project/upfield/whitelabels/plantafin-fr/assets/recipe/sync-images/5c23c581-b0aa-4ab6-ae0d-d4cc2cb8189b.jpg",underTitle:"Plein des idées de délicieuses recettes de gâteau faciles à réaliser et testées par nos membres ! Réussir vos recettes de gâteau na jamais été aussi simple ! "},
        {tilte:"Macarons",img:"https://media.tacdn.com/media/attractions-content--1x-1/0b/17/3d/96.jpg",underTitle:"Notre recette de base de macarons comprend un guide étape par étape et des conseils pour que vous puissiez réaliser ces élégants biscuits meringués aux amandes"},
        {tilte:"Gateaux tunisiens",img:"https://www.marhba.com/images/lifestyle2021/patisserie-tunis.jpg",underTitle:"La pâtisserie Traditions  vous invite à découvrir  la richesse et la diversité de la pâtisserie tunisienne à travers une expérience gustative inoubliable qui ravivera votre palet"}
        ,{tilte:"Cheesecake",img:"https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2014/11/7b084eaf9d7d564dd2667094c3dd1260a5e4d646.jpeg",underTitle:"Une recette infaillible pour les débutants pour réaliser à chaque fois un cheesecake riche, acidulé et onctueux. Découvrez les meilleurs ingrédients, astuces et techniques pour éviter les fissures et le surcuisson."}
        
    ]
}
const originalList=initialState.recetteList
export const recetteSlice=createSlice({
    name:"recette",
    initialState:{
        ...initialState,
        originalList
},
    reducers:{
        addRecette:(state,action)=>{
            state.recetteList.push(action.payload)
        },
        filterRecette:(state,action)=>{
            state.recetteList=state.originalList.filter(e=>e.tilte.toUpperCase().includes(action.payload.toUpperCase()))
        }
      
    }

})

export const {addRecette,filterRecette} = recetteSlice.actions
export default recetteSlice.reducer
