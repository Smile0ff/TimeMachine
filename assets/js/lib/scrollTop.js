"use strict";

let el = $("#to-top");

class ScrollTop{

    constructor(){
        this._events();
    }
    _events(){
        el.on("click", (e) => { this._handleClick(e) });
    }
    _handleClick(e){
        $("body").stop().animate({scrollTop:0}, 500);
        return false;   
    }

}

export default ScrollTop;