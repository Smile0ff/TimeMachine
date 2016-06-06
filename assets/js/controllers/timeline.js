"use strict";

import getVendor from "../lib/getVendor";

let timeline = $("#timeline");
let dragger = $("#dragger");
let yearHolder = $("#year-holder");

let timelineHeight = 0;
let timelineOffset = {};

let yearStart = timeline.data("year-start");
let yearEnd = timeline.data("year-end");
let yearsData = [];

let totalYears = yearEnd - yearStart + 1;

let transform = getVendor("transform");

class Timeline{

    constructor(){
        this.year = yearEnd;
        this.mouse = {
            x: 0,
            y: 0,
            oldX: 0,
            oldY: 0,
            direction: null
        };

        this.updateHeight();
        this.updateOffset();
        this.defineYearsData();
        this.updateYear();
    }
    defineYearsData(){
        let range = timelineHeight / (totalYears - 1);

        for(let i = 0; i < totalYears; i++){
            yearsData[i] = {
                year: yearEnd - i,
                position: range * i,
                reached: false,
                number: i
            }
        }
    }
    updateMouse(e){
        this.mouse.x = e.pageX - timelineOffset.left;
        this.mouse.y = e.pageY - timelineOffset.top;

        this.mouse.direction = this.mouse.oldY < this.mouse.y ? "down" : "up";

        this.mouse.oldX = this.mouse.x;
        this.mouse.oldY = this.mouse.y;
    }
    inRange(){
        return (this.mouse.y < 0 || this.mouse.y > timelineHeight) ? false : true;
    }
    updateCurrentYear(){
        let yearData = [];

        for(let i = 0, r = totalYears - 1; i < totalYears; r--, i++){
            yearData = (this.mouse.direction === "down") ? yearsData[i] : yearsData[r];

            if(this.mouse.y >= yearData.position - 3 && this.mouse.y <= yearData.position + 3){
                yearData.reached = true;
                if(this.mouse.direction === "down" && i > 0) yearsData[i - 1]["reached"] = false;
                if(this.mouse.direction === "up" && r < totalYears - 1) yearsData[r + 1]["reached"] = false;

                this.year = yearData.year;
            }
        }
    }
    updateHeight(){
        timelineHeight = timeline.height();
    }
    updateOffset(){
        timelineOffset = timeline.offset();
    }
    updateDraggerPosition(){
        if(this.mouse.y < 0) this.mouse.y = 0;
        if(this.mouse.y > timelineHeight) this.mouse.y = timelineHeight;
    }
    updateDragger(){
        dragger.css({ transform: "translateY("+ this.mouse.y +"px)" });
    }
    updateYear(){
        yearHolder.css({ transform: "translateY("+ this.mouse.y +"px)" }).html(this.year);
    }
}

export default Timeline;