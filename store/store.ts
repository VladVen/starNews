import {combineReducers, configureStore} from "@reduxjs/toolkit";
import NewsSlice from "@/store/reducers/NewsReducer/NewsSlice";

const rootReducer = combineReducers({
    newsReducer: NewsSlice,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']