"use strict";

let page = $("#page");
let switchers = $(".switcher");
let activeClass = "";

class Swicther{

    constructor(){
        this._events();
    }
    _events(){
        page
            .on("click", ".switcher", (e) => { this._handleSwitch(e) })
            .on("click", ".close-part", (e) => { this._handleClose(e) });
    }
    _handleSwitch(e){
        let target = $(e.target).closest(".switcher");
        let partClassName = target.data("part");

        activeClass = partClassName;

        page.addClass(partClassName);
        target.addClass("active");

        return false;
    }
    _handleClose(e){
        page.removeClass(activeClass);
        switchers.removeClass("active");

        return false;
    }
}

export default Swicther;