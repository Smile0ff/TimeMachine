"use strict";

let page = $("#page");
let touchID = 0;

class MobileHover{

    constructor(){
        this._events();
    }
    _events(){
        page
            .on("touchstart", ".touchable", (e) => { this._touchStart(e) })
            .on("touchend", ".touchable", (e) => { this._touchEnd(e) });
    }
    _touchStart(e){
        $(e.target).closest(".touchable").removeClass("touch-end").addClass("touch-start");
    }
    _touchEnd(e){
        $(e.target).closest(".touchable").removeClass("touch-start").addClass("touch-end");
    }
}

export default MobileHover;