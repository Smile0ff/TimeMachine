"use strict";

let toggleMenu = $("#toggle-menu");
let menuHolder = $("#menu-holder");
let menuSubstrate = $("#menu-substrate");

let isActive = false;

class Menu{

    constructor(){
        this._events();
    }
    _events(){
        toggleMenu.on("click", (e) => { this.handleToggleMenu(e) });
        $(document).on("touchmove", (e) => {this.preventScroll(e) });
    }
    handleToggleMenu(e){
        isActive = !isActive;

        toggleMenu.toggleClass("active");
        menuHolder.toggleClass("active");
        menuSubstrate.toggleClass("active");
        
        return false;
    }
    preventScroll(e){
        if(isActive){
            e.preventDefault();
            return false;
        }
    }
}

export default Menu;