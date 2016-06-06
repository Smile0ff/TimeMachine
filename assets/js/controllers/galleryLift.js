"use strict";

class GalleryLift{

    constructor(el, perRequest = 3){
        this.el = el;
        this.scrollY = 0;
        this.perRequest = perRequest;

        this.totalCount = this.perRequest;
    }
    updateScrollPosition(){
        this.scrollY = $(window).scrollTop() + window.innerHeight;
    }
    hasReached(){
        let lastChild = this.el.find(".lift-item:last-child");
        let lastChildYPosition = lastChild.height() + lastChild.offset().top;

        return (this.scrollY > lastChildYPosition) ? true : false;
    }
    updateTotalCount(){
        this.totalCount += this.perRequest;
    }
    resetTotalCount(){
        this.totalCount = this.perRequest;
    }
}

export default GalleryLift;