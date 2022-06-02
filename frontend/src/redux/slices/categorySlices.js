import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../utils/baseURL'

//action

export const createCategoryAction = createAsyncThunk('category/create', (category, {rejectWithValue, getState, dispatch}) => {
    //http callback
    try {
        const {data} = await axios.post(`${baseUrl}/api/category`, {
            title: category?.title,
        })
    } catch (error) {
        if(!error?.response) {
            throw error
        }
        return rejectWithValue(error?.response?.data)
    }

})


