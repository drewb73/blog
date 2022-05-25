import {configureStore} from '@reduxjs/toolkit'
import usersReducer from '../slices/usersSlices'

const store = configureStore({
    reducer: {
        users: usersReducer,
    }
})


export default store