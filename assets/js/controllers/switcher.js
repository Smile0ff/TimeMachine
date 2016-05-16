"use strict";

let page = $("#page");
let closePart = $("#close-part");
let posClassName = null;

class Swicther{

    constructor(){
        this._events();
    }
    _events(){
        page.on("click", ".switcher-cntrl", (e) => { this._handleSwitch(e) });
        closePart.on("click", (e) => { this._handleClose(e) });
    }
    _handleSwitch(e){
        posClassName = $(e.currentTarget).data("position");
        page.addClass(posClassName);

        return false;
    }
    _handleClose(e){
        page.removeClass(posClassName);

        return false;
    }
}

export default Swicther;
