import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";



export const fetchCount = createAsyncThunk(
    'count',
    async (search: string, thunkAPI) => {
        try {
            const response = await axios.get<number>(`https://api.spaceflightnewsapi.net/v3/articles/count?title_contains=${search}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Server error')
        }
    }
)