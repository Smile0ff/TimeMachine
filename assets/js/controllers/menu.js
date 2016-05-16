"use strict";

let toggleMenu = $("#toggle-menu");
let menuHolder = $("#menu-holder");
let menuSubstrate = $("#menu-substrate");

class Menu{

    constructor(){
        this._events();
    }
    _events(){
        toggleMenu.on("click", (e) => { this.handleToggleMenu(e) });
    }
    handleToggleMenu(e){
        toggleMenu.toggleClass("active");
        menuHolder.toggleClass("active");
        menuSubstrate.toggleClass("active");
        
        return false;
    }
}

export default Menu;