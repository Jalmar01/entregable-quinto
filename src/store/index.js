import {configureStore} from "@reduxjs/toolkit";
import trainerName from './slices/trainerName.slices'

export default configureStore({
    reducer:{
        trainerName
    }
})
