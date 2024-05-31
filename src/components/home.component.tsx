import * as React from 'react';
import Page from "./common/Page";

interface IProps {
}

interface IState {
}

class Home extends React.Component<IProps, IState> {

    public render(): React.ReactNode {
        return (
            <Page
                content={
                    <>
                        <div>
                            <div className="top-mv-wrap">
                                <div className="top-movie" id="top-movie">
                                    <picture className="top-movie__copy">
                                        <source media="(max-width: 768px)"
                                                srcSet="images/top/movie-copy--sp.svg"/>
                                            <img src="images/top/movie-copy.svg" alt="ICTで未来を拓く"/>
                                    </picture>
                                    <div className="top-movie__object">
                                        <video poster="/assets/movie/top_mv.jpg" webkit-playsinline="" playsInline={true}
                                               muted={true} autoPlay={true} loop={true}>
                                            <source src="videos/top_mv_2.mp4" type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                            </div>

                            <section className="l-section top-card-section">
                                <div className="l-Inner--1200">
                                    <div className="l-Inner__Child">
                                        <div className="top-card">
                                            <a href="/solutions/" className="top-card__link">
                                                <picture className="top-card__image">
                                                    <img srcSet="images/top/top-card04%402x.jpg 2x"
                                                         src="images/top/top-card04.jpg" alt=""/>
                                                </picture>
                                                <div className="top-card__box">
                                                    <p className="top-card__title">Meomeomeomeo<br/>Meomeomeomeo</p>
                                                </div>
                                            </a>
                                            <a href="/recruitment/" className="top-card__link">
                                                <picture className="top-card__image">
                                                    <img srcSet="images/top/top-card02%402x.jpg 2x"
                                                         src="images/top/top-card02.jpg" alt=""/>
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
                    </>
                }
            />

        );
    }
}

export default Home;