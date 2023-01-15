import React from 'react';
import {CircularProgress} from "@mui/material";
import style from './preloader.module.scss'

export const Preloader = () => {
    return (
        <>
            <CircularProgress className={style.preloader}/>
        </>
    );
};

