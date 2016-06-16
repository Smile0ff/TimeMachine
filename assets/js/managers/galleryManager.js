"use strict";

import Response from "../core/response";
import GalleryService from "../services/galleryService";
import photoAlbumItem from "../templates/photoAlbumItem.hbs!";

import Tags from "../controllers/tags";
import Timeline from "../controllers/timeline";
import GalleryLift from "../controllers/galleryLift";

let page = $("#page");
let tagsHolder = $("#tags-holder");
let dataHolder = $("#lift-holder");

let isLoading = false;
let isPressed = false;
let isLast = false;
let isScrollable = false; 

let isReplaceHTML = false;

class GalleryManager{

    constructor(){
        this.tags = new Tags(tagsHolder);
        this.timeline = new Timeline();
        this.lift = new GalleryLift(dataHolder);
        this.service = new GalleryService();

        this._events();
    }
    _events(){
        page
            .on("click", ".tag", (e) => { this._handleTag(e) })
            .on("mousedown", "#dragger", (e) => { this._handleMouseDown(e) });

        $(window)
            .on("mousemove", (e) => { this._handleMouseMove(e) })
            .on("scroll", (e) => { this._handleScroll(e) })
            .on("resize", (e) => { this._handleResize(e) });
    }
    _handleTag(e){
        e.preventDefault();

        this.loadingStart();

        this.tags
            .setCurrent(e)
            .setTagId();

        this.service
            .getData({
                tagId: this.tags.tagId,
                year: this.timeline.year
            })
            .done((response) => {
                response = JSON.parse(response);

                isReplaceHTML = true;
                isScrollable = true;
                isLast = response.isLast;

                this.lift.resetTotalCount();
                this.tags.activateCurrent();

                this.render(response.data);

                this.loadingEnd();
            })
            .fail((error) => {
                error = JSON.parse(error.responseText);
                
                isReplaceHTML = false;
                new Response(error);

                this.loadingEnd();
            });

        return false;
    }
    _handleMouseDown(e){
        e.preventDefault();
        if(isLoading) return;
        isPressed = true;

        this.timeline.updateMouse(e);

        $(window).one("mouseup", (e) => { this._handleMouseUp(e) });
        return false;
    }
    _handleMouseMove(e){
        if(!isPressed || isLoading) return;

        this.timeline.updateMouse(e);

        if(!this.timeline.inRange()) return;
        this.timeline.updateCurrentYear();
        this.timeline.updateDragger();
        this.timeline.updateYear();

        return false;
    }
    _handleMouseUp(e){
        e.preventDefault();
        if(!isPressed || isLoading) return;
        isPressed = false;

        this.timeline.updateMouse(e);
        this.timeline.updateDraggerPosition();
        this.timeline.updateDragger();

        this.loadingStart();

        this.service
            .getData({
                year: this.timeline.year,
                tagId: this.tags.tagId
            })
            .done((response) => {
                response = JSON.parse(response);
                
                isReplaceHTML = true;
                isScrollable = true;
                isLast = response.isLast;

                this.lift.resetTotalCount();

                this.render(response.data);

                this.loadingEnd();
            })
            .fail((error) => {
                error = JSON.parse(error.responseText);
                
                isReplaceHTML = false;
                new Response(error);

                this.loadingEnd();
            });

        return false;
    }
    _handleScroll(e){
        this.timeline.updateOffset();

        if(isLast || isLoading || isScrollable) return;
        this.lift.updateScrollPosition();

        if(!this.lift.hasReached()) return;

        this.loadingStart();

        this.service
            .getData({
                totalCount: this.lift.totalCount,
                tagId: this.tags.tagId,
                year: this.timeline.year
            })
            .done((response) => {
                response = JSON.parse(response);

                isReplaceHTML = false;
                isLast = response.isLast || false;

                this.lift.updateTotalCount();

                this.render(response.data);

                this.loadingEnd();
            })
            .fail((error) => {
                error = JSON.parse(error.responseText);

                new Response(error);

                this.loadingEnd();
            });


        return false;
    }
    _handleResize(e){
        isPressed = false;
        isLoading = false;

        this.timeline.updateHeight();
        this.timeline.updateOffset();
        this.timeline.defineYearsData();
        this.timeline.updateDragger();
        this.timeline.updateYear();

        return false;
    }
    render(data){
        let html = photoAlbumItem({ albums: data });
        isReplaceHTML ? dataHolder.html(html) : dataHolder.append(html);

        if(isReplaceHTML){
            window.setTimeout(() => {
                window.scrollTo(0, 0);
                isScrollable = false;
            }, 50);
        }

    }
    loadingStart(){
        isLoading = true;
        page.addClass("__loading");
    }
    loadingEnd(){
        isLoading = false;
        page.removeClass("__loading");
    }
    
}

export default GalleryManager;