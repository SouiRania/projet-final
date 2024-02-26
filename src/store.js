import { configureStore } from "@reduxjs/toolkit";
import recetteReducer from "./redux/recetteSlice"


export const store=configureStore({
    reducer:{
       recetteReducer

    }
})

