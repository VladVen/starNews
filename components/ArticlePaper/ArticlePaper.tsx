import React, {FC} from 'react';
import {Paper} from "@mui/material";
import Link from "next/link";
import style from './articlePaper.module.scss'
import EastIcon from '@mui/icons-material/East';
import {INews} from "@/types/INews";
import DateParser from "@/components/DateParser/DateParser";

interface IArticlePaper {
    article: INews
    searchValue: string
}

export const ArticlePaper: FC<IArticlePaper> = ({article, searchValue}) => {


    const findOccurrences = (str: string) => {
        const regExp = new RegExp(searchValue, 'gi');
        return {
            __html: str
                .replace(regExp, (match) => `<span style="background-color: yellow">${match}</span>`)
        }
    }


    return (
        <Link href={`/article/${article.id}`} data-testid={'readMore'}>
            <Paper className={style.paper}>
                <img src={article.imageUrl} alt={'image'}/>
                <div className={style.description}>
                    <DateParser date={article.publishedAt}/>
                    <div dangerouslySetInnerHTML={findOccurrences(article.title)}></div>
                    <div dangerouslySetInnerHTML={findOccurrences(article.summary)}></div>
                    <Link href={`/article/${article.id}`} data-testid={'readMore'}>
                        Read more
                        <EastIcon/>
                    </Link>
                </div>
            </Paper>
        </Link>
    );
};
