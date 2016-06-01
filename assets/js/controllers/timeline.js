"use strict";

import getVendor from "../lib/getVendor";
import Response from "../core/response";
import photoAlbumItem from "../templates/photoAlbumItem.hbs!";

let page = $("#page");
let el = $("#timeline");
let dragger = $("#dragger");
let yearHolder = $("#year-holder");
let dataHolder = $("#lift-holder");

let timelineHeight = 0;
let timelineOffset = {};

let yearStart = el.data("year-start");
let yearEnd = el.data("year-end");

let totalYears = yearEnd - yearStart + 1;
let yearsData = [];
let currentYear = yearEnd; 

let mouse = {
    x: 0,
    y: 0,
    oldX: 0,
    oldY: 0,
    direction: null
};

let isPressed = false;
let isResizing = false;
let isLoading = false;

let transform = getVendor("transform");

class Timeline{

    constructor(){
        this._events();

        this.defineTimelineData();
        this.defineYearsData();
        this.updateYear();
    }
    _events(){
        dragger.on("mousedown", (e) => { this._handleDown(e) });
        $(window)
            .on("mousemove", (e) => { this._handleMove(e) })
            .on("scroll", (e) => { this._handleScroll(e) });
    }
    defineTimelineData(){
        timelineHeight = el.height();
        timelineOffset = el.offset();
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
    _handleDown(e){
        e.preventDefault();
        isPressed = true;

        console.log(e.pageX);

        mouse.x = e.pageX - timelineOffset.left;
        mouse.y = e.pageY - timelineOffset.top;

        $(window).one("mouseup", (e) => { this._handleUp(e) });
        return false;
    }
    _handleMove(e){
        if(!isPressed) return;

        mouse.x = e.pageX - timelineOffset.left;
        mouse.y = e.pageY - timelineOffset.top;

        this.defineDirection();

        if(mouse.y < 0 || mouse.y > timelineHeight) return;

        this.defineCurrentYear();
        this.updateDragger();
        this.updateYear();

        mouse.oldX = mouse.x;
        mouse.oldY = mouse.y;

        return false;
    }
    _handleUp(e){
        e.preventDefault();
        if(!isPressed) return;
        isPressed = false;

        mouse.x = e.pageX - timelineOffset.left;
        mouse.y = e.pageY - timelineOffset.top;

        if(mouse.y < 0) mouse.y = 0;
        if(mouse.y > timelineHeight) mouse.y = timelineHeight;

        this.updateDragger();

        if(isResizing) return;

        isLoading = true;
        page.addClass("__loading");
        $(document).trigger("timeline:loadingStart");

        $.ajax({
            url: "php/timeline.php",
            type: "GET",
            data: { year: currentYear }
        })
        .done((response) => {
            response = JSON.parse(response);

            window.setTimeout(() => {

                window.scrollTo(0, 0);
                this.render(response.data);
                $(document).trigger("timeline:loadingEnd");
            }, 100);
        })
        .fail((error) => {
            error = JSON.parse(error.responseText);
            new Response(error);
            $(document).trigger("timeline:loadingError");
        })
        .always(() => {
            isLoading = false;
            page.removeClass("__loading");
        });

        return false;
    }
    _handleScroll(e){
        this.defineTimelineData();

        return false;
    }
    defineDirection(){
        mouse.direction = mouse.oldY < mouse.y ? "down" : "up";
    }
    defineCurrentYear(){
        for(let i = 0, r = totalYears - 1; i < totalYears; r--, i++){
            let data = (mouse.direction === "down") ? yearsData[i] : yearsData[r];

            if(mouse.y >= data.position - 3 && mouse.y <= data.position + 3){
                data.reached = true;
                if(mouse.direction === "down" && i > 0) yearsData[i - 1]["reached"] = false;
                if(mouse.direction === "up" && r < totalYears - 1) yearsData[r + 1]["reached"] = false;

                currentYear = data.year;
            }
        }
    }
    updateDragger(){
        dragger.css({
            transform: "translateY("+ mouse.y +"px)"
        });
    }
    updateYear(){
        yearHolder.css({
            transform: "translateY("+ mouse.y +"px)"
        }).html(currentYear);
    }
    render(data){
        let html = photoAlbumItem({ albums: data });
        dataHolder.html(html);
    }
}

export default Timeline;