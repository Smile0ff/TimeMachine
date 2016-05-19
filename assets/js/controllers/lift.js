"use strict";

import config from "../appConfig";

const INITIAL_COUNT = 3;
const LIFT_PER_REQUEST = 3;

let holder = $("#lift-holder");

let scrollY = 0;
let dimension = {};
let bottomEdgeY = 0;
let itemOffsetY = 0;

let isLoading = false;

class Lift{

    constructor(){
        this._events();

        dimension = this.getDimension();
    }
    _events(){
        $(window).on("scroll", (e) => { this._handleScroll(e) })
                 .on("resize", (e) => { this._handleResize(e) });
    }
    getDimension(){
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    }
    _handleScroll(e){
        scrollY = $(window).scrollTop();
        bottomEdgeY = dimension.h + scrollY;
        itemOffsetY = holder.find(".lift-item:last-child").offset().top;
        

        if(bottomEdgeY < itemOffsetY || isLoading) return;
        isLoading = true;

        

        return false;
    }
    _handleResize(e){
        dimension = this.getDimension();
        return false;
    }
    

}

export default Lift;