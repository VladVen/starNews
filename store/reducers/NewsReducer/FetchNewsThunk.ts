import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {INews} from "@/types/INews";

export interface IOptions {
    search: string,
    skip: number
}

export const fetchNews = createAsyncThunk(
    'news',
    async (options: IOptions, thunkAPI) => {
        try {
            const response = await axios.get<INews[]>(`https://api.spaceflightnewsapi.net/v3/articles?_limit=6&_start=${options.skip}&title_contains=${options.search}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Server error')
        }
    }
)