import {configureStore} from '@reduxjs/toolkit'
import usersReducer from '../slices/usersSlices'
import categoriesReducer from '../slices/categorySlices'


const store = configureStore({
    reducer: {
        users: usersReducer,
        category: categoriesReducer,
    }
})


export default store