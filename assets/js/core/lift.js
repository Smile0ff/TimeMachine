"use strict";

let page = $("#page");

class Lift{

    constructor(el, options = {}){
        this.el = el;
        this.options = options;

        this.dimension = {};
        this.isLoading = false;
        this.isLast = false;

        this.totalCount = this.options.perRequest;

        this._events();
        this.setDimension();
    }
    _events(){
        $(window).on("scroll", (e) => { this._handleScroll(e) })
                 .on("resize", (e) => { this._handleResize(e) });
    }
    _handleScroll(e){
        if(this.isLast) return;

        let scrollY = $(window).scrollTop();
        let bottomEdge = this.getBottomEdge(scrollY);
        let lowerY = this.getLowerY();
        let data = {};

        if(bottomEdge < lowerY || this.isLoading) return;
        this.isLoading = true;
        page.addClass("__loading");

        data[this.options.params.total_items_on_page] = this.totalCount;

        $.ajax({
            url: this.options.url,
            type: "GET",
            data: data
        })
        .done((response) => {
            response = JSON.parse(response);

            this.isLast = response.isLast;
            
            this.updateTotalCount();
            this.render(response);
        })
        .always(() => {
            this.isLoading = false;
            page.removeClass("__loading");
        });

        return false;
    }
    _handleResize(e){
        this.isLoading = false;
        this.scroll = {};

        this.setDimension();

        return false;
    }
    getBottomEdge(scrollY){
        return scrollY + window.innerHeight;
    }
    getLowerY(){
        let lastChild = this.el.find(".lift-item:last-child");

        return lastChild.offset().top + lastChild.height();
    }
    setDimension(){
        this.dimension = {
            w: window.innerWidth,
            h: window.innerHeight
        }
    }
    getDimension(){
        return this.dimension;
    }    
    updateTotalCount(){
        this.totalCount += this.options.perRequest;
    }
}

export default Lift;