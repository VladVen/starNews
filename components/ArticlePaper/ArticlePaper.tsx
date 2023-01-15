import React, {FC} from 'react';
import {Paper} from "@mui/material";
import Link from "next/link";
import style from './articlePaper.module.scss'
import EastIcon from '@mui/icons-material/East';
import {INews} from "@/types/INews";
import DateParser from "@/components/DateParser/DateParser";

interface IArticlePaper {
    article: INews
}
export const ArticlePaper:FC<IArticlePaper> = ({article}) => {
    return (
        <Paper className={style.paper}>
            <img src={article.imageUrl} alt={'image'}/>
            <div className={style.description}>
                <DateParser date={article.publishedAt} />
                <div>{article.title}</div>
                    <div>{article.summary}</div>
                    <Link href={`/article/${article.id}`} data-testid={'readMore'}>
                        Read more
                        <EastIcon />
                    </Link>
            </div>
        </Paper>
    );
};
