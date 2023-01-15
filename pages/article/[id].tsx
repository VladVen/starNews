import React, {FC} from 'react';
import {GetServerSideProps} from "next";
import axios from "axios";
import {INews} from "@/types/INews";
import {Paper} from "@mui/material";
import Link from "next/link";
import style from './[id].module.scss'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DateParser from "@/components/DateParser/DateParser";
import Head from "next/head";

interface IDetailedArticle {
    article: INews
}

const DetailedArticle: FC<IDetailedArticle> = ({article}) => {
    return (
        <>
            <Head>
                <meta content={article.title}></meta>
                <title>Article</title>
            </Head>
            <div className={style.container}>
                <div>
                    <img src={article.imageUrl} alt={'photo'} className={style.img}/>
                    <Paper className={style.paper}>
                        <div className={style.title}>{article.title}</div>
                        <div className={style.info}>
                            <div>Published by: {article.newsSite}</div>
                            <DateParser date={article.publishedAt} />
                        </div>

                        <div>{article.summary}</div>
                        <a className={style.origin} target={'_blank'} rel={'noreferrer'} href={article.url}>Origin: {article.url}</a>
                    </Paper>
                    <Link href={'/'}><KeyboardBackspaceIcon/> Back to homepage</Link>
                </div>
            </div>
        </>


    );
};

export default DetailedArticle;


export const getServerSideProps: GetServerSideProps = async ({params}) => {
    if (!params) return {
        notFound: true
    }
    try {
        const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)
        return {
            props: {article: response.data}
        }
    } catch (e) {
        return {
            notFound: true
        }
    }

}