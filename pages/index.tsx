import Head from 'next/head'
import {Search} from "@/components/Search/Search";
import {Box, Pagination} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import React, {useEffect, useState} from "react";
import {fetchNews} from "@/store/reducers/NewsReducer/FetchNewsThunk";
import {ArticleList} from "@/components/ArticleList/ArticleList";
import style from '../styles/home.module.scss'
import {fetchCount} from "@/store/reducers/NewsReducer/FetchCountThunk";
import useDebounce from "@/hooks/useDebounce";
import {NewsSlice} from "@/store/reducers/NewsReducer/NewsSlice";
import useWindowSize from "@/hooks/useWindowSize";
import {Preloader} from "@/components/Preloader/Preloader";


export default function Home() {
    const [searchQuery, setSearchQuery] = useState('')
    const [page, setPage] = useState(1)
    const {isLoading, news, skip, totalCount} = useAppSelector(state => state.newsReducer)
    const dispatch = useAppDispatch()

    const debouncedSearch = useDebounce(searchQuery, 500);
    const {width} = useWindowSize()

    const {increment} = NewsSlice.actions


    useEffect(() => {
        dispatch(fetchNews({search: debouncedSearch, skip}))
        dispatch(fetchCount(debouncedSearch))
    }, [debouncedSearch, skip])

    const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        dispatch(increment((value - 1) * 6));
    };
    const handleSearch = (value: string) => {
        setPage(0)
        setSearchQuery(value)
    };


    return (
        <div className={style.container}>
            <Head>
                <title>News</title>
            </Head>
            <Box>
                <Search value={searchQuery} setValue={handleSearch}/>
                <div className={style.result}> Results: {totalCount}</div>
                <hr/>
                {
                    isLoading ? <Preloader/> : totalCount !== 0 ? <>
                        <ArticleList articles={news} searchValue={debouncedSearch}/>
                        <div className={style.pagination}>
                            <Pagination count={Math.ceil(totalCount / 6)} onChange={handlePagination}
                                        size={width > 500 ? 'large' : 'small'} page={page}/>
                        </div>
                    </> : <>
                        Nothing here, check your search query
                    </>

                }

            </Box>
        </div>
    )
}
