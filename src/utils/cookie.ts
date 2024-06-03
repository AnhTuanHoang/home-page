
export function setCookie(cname: string, cvalue: any, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "";
    let value = encodeURIComponent(cvalue);
    document.cookie = cname + "=" + value + ";" + expires + ";path=/";
}

export function getCookie(cname: string) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    let result = "";
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            result = c.substring(name.length, c.length);
            break;
        }
    }
    if (result.length > 0) {
        result = decodeURIComponent(result);
    }
    return result;
}

export function deleteCookie(name: string, path?: string, domain?: string) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? ";path=" + path : "") +
            ((domain) ? ";domain=" + domain : "") +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}

export function deleteAllCookies() {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}