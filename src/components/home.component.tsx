import * as React from 'react';
import Page from "./common/Page";
import {siteMap} from "../utils/site-map";
import {useTranslation} from "react-i18next";
import NewsHome from "./news/home";
import {FILE_LOCATION} from "../utils/constant";

export default function Home() {
    const {t} = useTranslation();

    return (
        <Page
            content={
                <>
                    <div>
                        <div className="top-mv-wrap">
                            <div className="top-movie" id="top-movie">
                                <picture className="top-movie__copy">
                                    <source media="(max-width: 768px)"
                                            srcSet={`${FILE_LOCATION.IMG}/top/movie-copy--sp.svg`}/>
                                    <img src={`${FILE_LOCATION.IMG}/top/movie-copy.svg`}
                                         alt="ICTで未来を拓く"/>
                                </picture>
                                <div className="top-movie__object">
                                    <video poster={`${FILE_LOCATION.MOVIE}/top_mv.jpg`} webkit-playsinline="" playsInline={true}
                                           muted={true} autoPlay={true} loop={true}>
                                        <source src={`${FILE_LOCATION.VIDEOS}/top_mv_2.mp4`} type="video/mp4"/>
                                    </video>
                                </div>
                            </div>
                        </div>

                        <section className="l-section top-card-section">
                            <div className="l-Inner--1200">
                                <div className="l-Inner__Child">
                                    <div className="top-card">
                                        <a href={siteMap.business} className="top-card__link">
                                            <picture className="top-card__image">
                                                <img srcSet={`${FILE_LOCATION.IMG}/top/top-card04%402x.jpg 2x`}
                                                     src={`${FILE_LOCATION.IMG}/top/top-card04.jpg`} alt=""/>
                                            </picture>
                                            <div className="top-card__box">
                                                <p className="top-card__title">Meomeomeomeo<br/>Meomeomeomeo</p>
                                            </div>
                                        </a>
                                        <a href={siteMap.recruitment} className="top-card__link">
                                            <picture className="top-card__image">
                                                <img srcSet={`${FILE_LOCATION.IMG}/top/top-card02%402x.jpg 2x`}
                                                     src={`${FILE_LOCATION.IMG}/top/top-card02.jpg`} alt=""/>
                                            </picture>
                                            <div className="top-card__box">
                                                <h2 className="top-card__title">MEOMEO</h2>
                                                <p className="top-card__text">Meomeomeomeo<br/>Meomeomeomeo</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <NewsHome/>


                </>
            }
            isHome={true}
        />
    );
}
