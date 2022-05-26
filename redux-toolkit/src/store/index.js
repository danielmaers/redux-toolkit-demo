import { configureStore } from "@reduxjs/toolkit";
import characters from "./slices/characterSlice"

export default configureStore({
    reducer:{
        characters: characters
    }
})
