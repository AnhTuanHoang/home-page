import React from "react";


function Footer() {
    return (
        <footer className="l-footer">
            <div className="l-Footer__Inner">
                <div className="l-Footer__Box">
                    <ul className="l-footer-link">
                        <li className="l-footer-link__category is-nonChildSP">
                            <a href="/" className="l-Footer__NaviLevel1">HOME</a>
                        </li>
                    </ul>
                </div>

                <div className="l-Footer__Box">
                    <dl className="l-footer-link">
                        <dt className="l-footer-link__category">
                            <a href="/solutions_products/" className="l-Footer__NaviLevel2">Who we are</a>
                        </dt>
                    </dl>
                </div>

                <div className="l-Footer__Box">
                    <dl className="l-footer-link">
                        <dt className="l-footer-link__category js-accoBtnSP">
                            <a href="/solutions/" className="l-Footer__NaviLevel2">Enterprise Solutions</a>
                        </dt>
                    </dl>
                </div>

                <div className="l-Footer__Box">
                    <dl className="l-footer-link">
                        <dt className="l-footer-link__category js-accoBtnSP">
                            <a href="/offshore/" className="l-Footer__NaviLevel2">Offshore Development</a>
                        </dt>
                    </dl>
                </div>

                <div className="l-Footer__Box">
                    <ul className="l-footer-link is-spFlexWrap">
                        <li className="l-footer-link__category is-spFlex"><a href="/news/">NEWS</a></li>
                        <li className="l-footer-link__category is-spFlex"><a href="/recruitment/">Recruitment</a></li>
                        <li className="l-footer-link__category is-spFlex"><a href="/contact/">Contact</a></li>
                        <li className="l-footer-link__category is-Facebook is-spFlex"><a
                            href="https://www.facebook.com/NisshoElectronicsVN" target="_blank">Facebook</a></li>
                    </ul>
                </div>
            </div>

            <div className="l-Footer__Foot">
                <a href="/partner/" className="l-Footer__Banner">
                    <img src="images/partner/banner.jpg"
                         srcSet="images/partner/banner%402x.jpg 2x" width="400" height="100"
                         alt="日商エレクトロニクスは浦安D-Rocksを応援しています" loading="lazy" />
                </a>

                {/*<ul className="l-Footer__OtherPage">*/}
                {/*    <li className="l-Footer__OtherPage--Item">*/}
                {/*        <a href="/company/csr/csr_privacy/" className="l-Footer__OtherPage--Link">*/}
                {/*            <div className="l-Footer__OtherPage--Text">個人情�&nbsp;�保護への取り組み</div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li className="l-Footer__OtherPage--Item">*/}
                {/*        <a href="/company/csr/csr_iso/" className="l-Footer__OtherPage--Link">*/}
                {/*            <div className="l-Footer__OtherPage--Text">品質管理・環境対策・情�&nbsp;�セキュリティ</div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li className="l-Footer__OtherPage--Item">*/}
                {/*        <a href="/sitepolicy/" className="l-Footer__OtherPage--Link">*/}
                {/*            <div className="l-Footer__OtherPage--Text">Webサイト利用規約</div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li className="l-Footer__OtherPage--Item">*/}
                {/*        <a href="/company/csr/csr_policy/" className="l-Footer__OtherPage--Link">*/}
                {/*            <div className="l-Footer__OtherPage--Text">ソーシャルメディアポリシー</div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li className="l-Footer__OtherPage--Item">*/}
                {/*        <a href="/company/terms/" className="l-Footer__OtherPage--Link">*/}
                {/*            <div className="l-Footer__OtherPage--Text">約款一覧</div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li className="l-Footer__OtherPage--Item">*/}
                {/*        <a href="/sitemap/" className="l-Footer__OtherPage--Link">*/}
                {/*            <div className="l-Footer__OtherPage--Text">サイトマップ</div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>

            <div className="l-Footer__Bottom">
                <div className="l-Footer__Bottom--Inner">
                    <p className="l-Footer__Bottom--Logo"><img src="images/common/logo_sojitzW.svg"
                                                               alt="sojitz group"/></p>
                    <p className="l-Footer__Bottom--Copy">©NISSHO ELECTRONICS CORPORATION All Rights Reserved.</p>
                </div>
            </div>
        </footer>
);
}

export default Footer;