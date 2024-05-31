import React from "react";


function Header() {
    return (
        <div className="l-header is-rev">
            <div className="l-header__inner">
                <h1 className="l-header-logo">
                    <a href="/"><img src="images/common/logoColor.svg" alt="日商エレクトロニクス"/></a>
                </h1>
                <nav className="l-Header__NaviWrap">
                    <div className="l-header-main-nav">
                        <ul className="l-header-nav l-Header__Navi">
                            <li className="l-header-nav__category is-nonChildSP is-about-us">
                                <a href="/about_us/" className="js-accoBtnTBLSP l-Header__NaviLevel1">Who we are</a>
                            </li>
                            <li className="l-header-nav__category is-nonChildSP is-offshore">
                                <a href="/offshore/" className="l-Header__NaviLevel1">Offshore Development</a>
                            </li>
                            <li className="l-header-nav__category is-nonChildSP is-solutions">
                                <a href="/solutions/" className="js-accoBtnTBLSP l-Header__NaviLevel1">Enterprise
                                    Solutions</a>
                            </li>
                        </ul>

                        <div className="l-Header__Close js-nav-close">
                            <span className="l-Header__Close--Icon"></span>
                            <span className="l-Header__Close--Text">閉じる</span>
                        </div>
                    </div>

                    <div className="l-Header__NaviChild">
                        <ul className="l-header-sub-nav">
                            <li className="l-header-sub-nav__item"><a href="/news/">NEWS</a></li>
                            <li className="l-header-sub-nav__item is-recruitment"><a
                                href="/recruitment/">RECRUITMENT</a></li>
                            <li className="l-header-sub-nav__item is-contact"><a href="/contact/">CONTACT</a></li>

                        </ul>
                    </div>
                </nav>
                <div className="l-Header__Navigation js-spNavBtn">
                    <p className="l-Header__GnavToggle">
                        <span className="l-Header__GnavToggle--Line"></span>
                        <span className="l-Header__GnavToggle--Text"></span>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Header;
