import React, {useEffect, useState} from "react";
import Page from "../common/Page";
import {NewsData} from "../../types/newsType";
import {API_URL, FILE_FUNCTION} from "../../utils/constant";
import {useTranslation} from "react-i18next";
import {tkeys} from "../../i18n";
import {siteMap} from "../../utils/site-map";
import {loadJsonFile} from "../../utils/readData";


function News() {
    const {t} = useTranslation();


    const [currentNews, setCurrentNews] = useState<NewsData[]>([]);

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        loadJsonFile(FILE_FUNCTION.NEWS).then((data) => {
            setCurrentNews(data);
        })

    };
    return (
        <Page
            content={
                <>
                    <div className="l-Section--Gray is-Padding--60">
                        <div className="l-Inner--1200">
                            <div className="p-TextArea">
                                <p>{t(tkeys.news.introduce)}</p>
                            </div>
                        </div>
                    </div>

                    <section className="l-Section">
                        <div className="l-Inner--1200">

                            <div>
                                <div className="c-Tab__Cont is-State--Active">
                                    <ul className="c-NewsList js-Press__Container">
                                        {currentNews.map((newsData) => (
                                            <li className="c-NewsList__Item js-Press__Item">
                                                <a href={`${siteMap.news}/${newsData.url}`}
                                                   target="_self" rel="" className="c-NewsList__Link">
                                                    <div className="c-NewsList__Head">
                                                        <span className="c-NewsList__Category">{newsData.type === 1 ? t(tkeys.news.businessType) : t(tkeys.news.internalType)}</span>
                                                        <time className="c-NewsList__Date">{newsData.release}</time>
                                                    </div>
                                                    <div className="c-NewsList__TextArea">
                                                        <p>{newsData.title}</p>
                                                    </div>
                                                </a>

                                            </li>
                                        ))}
                                    </ul>
                                    <div className="c-NewsList__Button js-Press__More">
                                        <a href="javascript:void(0);" className="p-Button__Border js-Press__MoreButton">
                                            <span className="p-Button__Text">{t(tkeys.news.readMore)}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }
        />
    );
}

export default News;
