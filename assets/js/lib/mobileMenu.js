"use strict";

let menuButton = $(".menu-btn");
let menuHolder = $(".part-holder.top-middle");
let isActive = false;

class MobileMenu{

    constructor(){
        this._events();
    }
    _events(){
        menuButton.on("touchstart", (e) => { this._handleOpen(e) });
        menuHolder.on("touchstart", ".close", (e) => { this._handleClose(e) });

        $(window).on("touchmove", (e) => { this._disableScroll(e) });
    }
    _handleOpen(e){
        isActive = true;
        menuHolder.addClass("active");
        return false;
    }
    _handleClose(e){
        isActive = false;
        menuHolder.removeClass("active");
        return false;
    }
    _disableScroll(e){
        if(isActive){
            e.preventDefault();
        } else{
            return true;
        }
    }
}

export default MobileMenu;