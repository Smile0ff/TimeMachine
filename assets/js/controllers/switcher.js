"use strict";

let page = $("#page");
let closePart = $("#close-part");
let bgCircle = $(".bg-circle-holder-inside");
let posClassName = null;

class Swicther{

    constructor(){
        this._events();
    }
    _events(){
        page
            .on("click", ".switcher-cntrl", (e) => { this._handleSwitch(e) })
            .on("mouseover", ".switcher-cntrl", (e) => { this._handleMouseOver(e) })
            .on("mouseout", ".switcher-cntrl", (e) => { this._handleMouseOut(e) });

        closePart.on("click", (e) => { this._handleClose(e) });
    }
    _handleSwitch(e){
        e.preventDefault();
        
        posClassName = $(e.currentTarget).data("position");
        page.addClass(posClassName);

        return false;
    }
    _handleMouseOver(e){
        bgCircle.addClass("hovered");

        return false;
    }
    _handleMouseOut(e){
        bgCircle.removeClass("hovered");

        return false;
    }
    _handleClose(e){
        page.removeClass(posClassName);
        bgCircle.removeClass("hovered");

        return false;
    }
}

export default Swicther;
