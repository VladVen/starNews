import React, {FC} from 'react';
import {INews} from "@/types/INews";
import {ArticlePaper} from "@/components/ArticlePaper/ArticlePaper";
import style from './ArticleList.module.scss'

interface IArticleList {
    articles: INews[]
}
export const ArticleList: FC<IArticleList> = ({articles}) => {
    return (
        <div className={style.container}>
            {
                articles.map(item => <ArticlePaper key={item.id} article={item}/>)
            }
        </div>
    );
};

