import React, {useEffect, useState} from "react";
import {NewsData} from "../../../types/newsType";
import {tkeys} from "../../../i18n";
import {useTranslation} from "react-i18next";
import {siteMap} from "../../../utils/site-map";
import {API_URL, FILE_FUNCTION} from "../../../utils/constant";
import {loadJsonFile} from "../../../utils/readData";



function NewsHome() {
    const {t} = useTranslation();

    const [currentNews, setCurrentNews] = useState<NewsData[]>([]);

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        loadJsonFile(FILE_FUNCTION.NEWS).then((data) => {
            let jsonData = data
            if (jsonData && jsonData.length > 3) {
                jsonData = jsonData.slice(Math.max(jsonData.length - 3, 0))

            }
            jsonData = jsonData.reverse()
            setCurrentNews(jsonData);
        })
    };
    return (
        <section className="l-section is-bgW">
            <div className="l-Inner--1200">
                <div className="l-Inner__Child">
                    <h2 className="m-title">{t(tkeys.news.newTitle)}
                        <span className="m-title__label">{t(tkeys.news.whatNews)}</span>
                    </h2>
                    <ul className="c-NewsList">
                        {currentNews.map((newsData) => (
                            <li className="c-NewsList__Item">
                                <a href={`${siteMap.news}/${newsData.url}`}
                                   target="_self" rel="" className="c-NewsList__Link">
                                    <div className="c-NewsList__Head">
                                        <span className="c-NewsList__Category">{newsData.type === 1 ? t(tkeys.news.businessType) : t(tkeys.news.internalType)}</span>
                                        <time className="c-NewsList__Date">{newsData.release}
                                        </time>
                                    </div>
                                    <div className="c-NewsList__TextArea">
                                        <p>{newsData.title}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="p-Button--Single300 is-top-news-abs">
                        <a href={siteMap.news} className="p-Button__Border">
                            <span className="p-Button__Text">{t(tkeys.news.list)}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsHome;
