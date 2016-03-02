"use strict";

import getVendor from "./getVendor";

let page = $("#page");
let parts = $(".part-holder");

let transform = getVendor("transform");
let partsData = {
    topLeft: {
        x: 100,
        y: 100,
        class: "top-left"
    },
    topMiddle: {
        x: 0,
        y: 100,
        class: "top-middle"
    },
    topRight: {
        x: -100,
        y: 100,
        class: "top-right"
    },
    bottomLeft: {
        x: 100,
        y: -100,
        class: "bottom-left"
    },
    bottomRight: {
        x: -100,
        y: -100,
        class: "bottom-right"
    }
};

class Swicther{

    constructor(){
        this._events();
    }
    _events(){
        page.on("click", ".switcher", (e) => { this._handleSwitch(e) });
    }
    _handleSwitch(e){
        let target = $(e.target).closest(".switcher");
        let partName = target.data("part");
        let partData = this.getSelectedPosition(partName);

        this.switchPart(partData);

        return false;
    }
    getSelectedPosition(partName = ""){
        return partsData.hasOwnProperty(partName) ? partsData[partName] : {};
    }
    switchPart(partData){
        let parts = parts.filter(".center ." + partData.class);
        let middlePart = parts.filter(".center");

        console.dirxml(parts);
        
        currentPart.css({ transform: "translateX(0%) translateY(0%)" });
        middlePart.css({ transform: "translateX("+ partData.x +"%) translateY("+ partData.y +"%)" });
    }
}

export default Swicther;