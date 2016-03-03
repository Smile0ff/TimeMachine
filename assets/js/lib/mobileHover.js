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
        let target = $(e.target).closest(".touchable");

        target.addClass("touch-start");

        touchID = e.originalEvent.changedTouches[0].identifier;
    }
    _touchEnd(e){
        if(e.originalEvent.changedTouches[0].identifier !== touchID) return;
        
        let target = $(e.target).closest(".touchable");
        target.removeClass("touch-start").addClass("touch-end");

        window.setTimeout(() => {
            target.removeClass("touch-end");
        }, 500);
    }
}

export default MobileHover;