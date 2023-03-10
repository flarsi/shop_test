import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from "assets/http";


export const fetchPromotions = createAsyncThunk('fetchAll',
    async (params, thunkAPI) => {
        try {
            const data = await axios.get(URL(params))
            const total = Number(data.headers['x-total-count'])
            return [data.data, total]
        } catch(error) {return thunkAPI.rejectWithValue(error.message)}
    }
)


export const fetchComments = createAsyncThunk('fetchAll',
    async (promotionId, thunkAPI) => {
        try {
            const data = await axios.get(`http://localhost:5000/comments?promotionId=${promotionId}&_expand=user`)
            console.log(data)
            return data.data
        } catch(error) {return thunkAPI.rejectWithValue(error.message)}
    }
)