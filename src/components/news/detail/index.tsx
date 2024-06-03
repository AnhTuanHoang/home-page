import React, {ReactElement, useEffect, useState} from "react";
import {NewsData} from "../../../types/newsType";
import {useParams} from 'react-router-dom';
import {FILE_FUNCTION} from "../../../utils/constant";
import {loadJsonFile, loadTextFile} from "../../../utils/readData";
import {marked} from "marked";
import {tkeys} from "../../../i18n";
import {useTranslation} from "react-i18next";
import {siteMap} from "../../../utils/site-map";
import Page from "../../common/Page";



function NewsDetail() {
    const {searchParam} = useParams();
    const [current, setCurrent] = useState<NewsData>();
    const [currentYear, setCurrentYear] = useState();
    const [content, setContent] = useState<string>("");

    const {t} = useTranslation();


    useEffect(() => {
        if (searchParam) {
            getData(searchParam)
        }
    }, [searchParam]);

    useEffect(() => {
        if (current && current.content) {
            getContentData(current.content)
        }
    }, [current]);

    const getData = (searchParam: string | undefined) => {
        loadJsonFile(FILE_FUNCTION.NEWS).then((data: NewsData[]) => {
            let news = data.find(x => x.url == searchParam);
            setCurrent(news);
            return news
        })

    };

    const getContentData = (contentUrl: string) => {
        loadTextFile(`${FILE_FUNCTION.NEWS}/${contentUrl}`).then((contentData) => {
            console.log(contentData)
            if (contentData) {
                setContent(contentData);
            }
        })
    };

    // Convert the file content from Markdown to HTML
    const createMarkup = (content: string) => {
        return {__html: marked(content)};
    };

    return (
        <Page
            content={
                <div>
                    <div className="l-Section p-PaddingBottom--Rsp100">
                        <div className="l-Inner--1200">
                            <div className="u-HeadCategory">
                                <a href={siteMap.news} className="u-Year">{t(tkeys.news.backToMain)}</a>
                                <div className="u-SnsButtonHead">
                                    <ul className="c-SnsButton">
                                    </ul>
                                </div>
                            </div>
                            <h1 className="p-HeadlineLevel1">{current?.title}</h1>
                        </div>
                    </div>
                    <div className="u-PressWrap c-SinglePage">
                        <section className="c-SinglePage__Contents l-Section">
                            <div className="l-Inner--1200">
                                <div style={{whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={createMarkup(content)} />
                            </div>
                        </section>
                    </div>
                </div>
            }
        />
    );
}

export default NewsDetail;
