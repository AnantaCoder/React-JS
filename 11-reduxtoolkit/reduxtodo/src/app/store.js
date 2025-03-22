import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice' // Corrected import

export const store = configureStore({
    reducer:todoReducer
})
