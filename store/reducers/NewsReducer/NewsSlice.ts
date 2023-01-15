import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchNews} from "./FetchNewsThunk";
import {INews} from "@/types/INews";
import {fetchCount} from "@/store/reducers/NewsReducer/FetchCountThunk";

interface IState {
    news: INews[],
    isLoading: boolean,
    error: string
    skip: number
    totalCount: number
}

const initialState: IState = {
    news: [],
    isLoading: true,
    error: '',
    skip: 0,
    totalCount: 0
}


export const NewsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.skip = action.payload
        },
    },
    extraReducers: {
        [fetchNews.fulfilled.type]: (state, action: PayloadAction<INews[]>) => {
            state.isLoading = false
            state.error = ''
            state.news = action.payload
        },
        [fetchNews.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
        [fetchCount.fulfilled.type]: (state, action: PayloadAction<number>) => {
            state.error = ''
            state.totalCount = action.payload
        },
        [fetchCount.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})

export default NewsSlice.reducer