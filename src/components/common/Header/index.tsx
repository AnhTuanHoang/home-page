import React, {ReactElement} from "react";
import {useTranslation} from "react-i18next";
import {tkeys} from "../../../i18n";
import {siteMap} from "../../../utils/site-map";
import LanguageSelector from "../../language";
import {FILE_LOCATION} from "../../../utils/constant";

interface PropTypes {
    isHome: boolean;
}

const Header: React.FC<PropTypes> = props => {

    const {t} = useTranslation();
    React.useEffect(() => {
        console.log("meomeo2")
        console.log(props)
    }, [props.isHome]);
    return (
        <div className={`l-header is-rev ${props.isHome ? "" : "is-3rd"}`}>
            <div className="l-header__inner">
                <h1 className="l-header-logo">
                    <a href="/"><img src={`${FILE_LOCATION.IMG}/common/logoColor.svg`} alt="日商エレクトロニクス"/></a>
                </h1>
                <nav className="l-Header__NaviWrap">
                    <div className="l-header-main-nav">
                        <ul className="l-header-nav l-Header__Navi">
                            <li className="l-header-nav__category is-nonChildSP is-solutions">
                                <a href={siteMap.business} className="js-accoBtnTBLSP l-Header__NaviLevel1">{t(tkeys.header.business)}</a>
                            </li>
                            <li className="l-header-nav__category is-nonChildSP is-offshore">
                                <a href={siteMap.whyUs} className="l-Header__NaviLevel1">{t(tkeys.header.whyUs)}</a>
                            </li>
                            <li className="l-header-nav__category is-nonChildSP is-about-us">
                                <a href={siteMap.aboutUS} className="js-accoBtnTBLSP l-Header__NaviLevel1">{t(tkeys.header.aboutUS)}</a>
                            </li>
                            <li className="l-header-nav__category is-nonChildSP is-about-us">
                                <a href={siteMap.recruitment} className="js-accoBtnTBLSP l-Header__NaviLevel1">{t(tkeys.header.recruitment)}</a>
                            </li>
                        </ul>

                    </div>

                    <div className="l-Header__NaviChild">
                        <ul className="l-header-sub-nav">
                            <li className="l-header-sub-nav__item"><a href={siteMap.news}>{t(tkeys.header.news)}</a></li>
                            <li className="l-header-sub-nav__item"><a href={siteMap.contact}>{t(tkeys.header.contact)}</a></li>
                            <li className="l-header-sub-nav__item" ><a><LanguageSelector/></a></li>
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
