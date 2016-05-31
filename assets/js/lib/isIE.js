"use strict";

function isIE(){
    let ua = window.navigator.userAgent;

    if(ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0 || ua.indexOf("Edge/") > 0){
        return true;
    }
    return false;
}

export default isIE;