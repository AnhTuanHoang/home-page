import React from "react";
import {useTranslation} from "react-i18next";
import {tkeys} from "../../i18n";
import {LOCALSTORAGE} from "../../utils/constant";


function LanguageSelector() {
    const {t, i18n} = useTranslation();
    const language = React.useRef(i18n.language);

    const handleChangeLanguage = () => {
        const newLanguage = language.current === "en" ? "jp" : "en";
        language.current = newLanguage;
        i18n.changeLanguage(language.current);
        localStorage.setItem(LOCALSTORAGE.LANG, language.current);
    };

    return (
        <div style={{cursor: "grab"}} onClick={handleChangeLanguage}>{t(tkeys.header.language)}</div>
    );
}

export default LanguageSelector;
