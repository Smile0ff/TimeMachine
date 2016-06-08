"use strict";

let carouselHolder = $("#carousel-holder");

let photoListHolder = $("#photo-list-holder");
let photoList = photoListHolder.find(".photo-item");
let photoCount = photoList.length;

let photoView = $("#photo-view-container");
let photoInfo = $("#photo-info-container");
let currentNum = $("#current-num");

class Carousel{

    constructor(){
        this.current = 0;

        this._events();
    }
    _events(){
        photoListHolder.on("click", ".photo-item", (e) => { this._handlePhoto(e) });

        carouselHolder.on("click", ".arrow", (e) => { this._handleArrow(e) })
                      .on("click", ".close", (e) => { this._handleClose(e) });
    }
    _handlePhoto(e){
        e.preventDefault();
        let target = $(e.currentTarget);
        let originalUrl = target.data("original");
        let photoDesc = target.data("desc");

        this.current = target.index();

        this._preloadPhoto(originalUrl, (img) => {
            let orientation = this._recognizeOrientation(img);
            
            carouselHolder.addClass("active");
            photoView
                .removeClass("landscape portrait")
                .addClass(orientation);

            this.render(img, photoDesc);
        });

        return false;
    }
    _handleArrow(e){
        e.preventDefault();
        let target = $(e.currentTarget);
        let direction = target.hasClass("left") ? "left" : "right";

        (direction === "left") ? this.current-- : this.current++;

        if(this.current < 0) this.current = photoCount - 1;
        if(this.current > photoCount - 1) this.current = 0;

        let photoItem = photoList.eq(this.current);
        let originalUrl = photoItem.data("original");
        let photoDesc = photoItem.data("desc");

        this._preloadPhoto(originalUrl, (img) => {
            let orientation = this._recognizeOrientation(img);
            
            carouselHolder.addClass("active");
            photoView
                .removeClass("landscape portrait")
                .addClass(orientation);

            this.render(img, photoDesc);
        });

        return false;
    }
    _handleClose(e){
        carouselHolder.removeClass("active");

        return false;
    }
    _preloadPhoto(url, cb){
        let image = new Image();

        image.onload = () => {
            cb(image);
        };

        image.src = url;
    }
    _recognizeOrientation(img){
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        return (width > height) ? "landscape" : "portrait";
    }
    render(img, desc){
        photoView.html(img);

        photoInfo.html(`
            <span class="upper-title">${ this.current + 1 } / ${ photoCount }</span>
            <span class="underline"></span>
            <p>${ desc }</p>
        `);
    }
}

export default Carousel;