import React from "react";
import {useTranslation} from "react-i18next";
import {tkeys} from "../../../i18n";
import {siteMap} from "../../../utils/site-map";
import LanguageSelector from "../../language";
import {FILE_LOCATION} from "../../../utils/constant";


function Footer() {

    const {t} = useTranslation();

    return (
        <footer className="l-footer">
            {/*    <div className="l-Footer__Box">*/}
            {/*        <ul className="l-footer-link is-spFlexWrap">*/}
            {/*            <li className="l-footer-link__category is-spFlex"><a href={siteMap.news}>NEWS</a></li>*/}
            {/*            <li className="l-footer-link__category is-spFlex"><a href={siteMap.recruitment}>Recruitment</a></li>*/}
            {/*            <li className="l-footer-link__category is-spFlex"><a href={siteMap.contact}>Contact</a></li>*/}
            {/*            <li className="l-footer-link__category is-Facebook is-spFlex"><a*/}
            {/*                href="https://www.facebook.com/NisshoElectronicsVN" target="_blank">Facebook</a></li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="l-Footer__Foot">
                <ul className="l-Footer__OtherPage">
                    <li className="l-Footer__OtherPage--Item">
                        <a href={siteMap.home} className="l-Footer__OtherPage--Link">
                            <div className="l-Footer__OtherPage--Text">{t(tkeys.footer.home)}</div>
                        </a>
                    </li>
                    <li className="l-Footer__OtherPage--Item">
                        <a href={siteMap.aboutUS} className="l-Footer__OtherPage--Link">
                            <div className="l-Footer__OtherPage--Text">{t(tkeys.footer.aboutUS)}</div>
                        </a>
                    </li>
                    <li className="l-Footer__OtherPage--Item">
                        <a href={siteMap.business} className="l-Footer__OtherPage--Link">
                            <div className="l-Footer__OtherPage--Text">{t(tkeys.footer.business)}</div>
                        </a>
                    </li>
                    <li className="l-Footer__OtherPage--Item">
                        <a href={siteMap.recruitment} className="l-Footer__OtherPage--Link">
                            <div className="l-Footer__OtherPage--Text">{t(tkeys.footer.recruitment)}</div>
                        </a>
                    </li>
                    {/*<li className="l-Footer__OtherPage--Item">*/}
                    {/*    <a className="l-Footer__OtherPage--Link">*/}
                    {/*        <div className="l-Footer__OtherPage--Text"><LanguageSelector/></div>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>
            </div>

            <div className="l-Footer__Bottom">
                <div className="l-Footer__Bottom--Inner">
                    <p className="l-Footer__Bottom--Logo"><img src={`${FILE_LOCATION.IMG}/common/logo_sojitzW.svg`}
                                                               alt="sojitz group"/></p>
                    <p className="l-Footer__Bottom--Copy">©NISSHO ELECTRONICS CORPORATION All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;