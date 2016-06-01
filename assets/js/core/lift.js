"use strict";

let page = $("#page");

class Lift{

    constructor(el, options = {}){
        this.el = el;
        this.data = [];
        this.options = options;
        this.reqData = options.reqData || {};
        this.eventName = "";

        this.dimension = {};
        this.isLoading = false;
        this.isLast = false;

        $.extend(this.reqData, {
            "totalCount": this.options.perRequest
        });

        this._events();
        this.setDimension();
    }
    _events(){
        $(window).on("scroll", (e) => { this._handleScroll(e) })
                 .on("resize", (e) => { this._handleResize(e) });
    }
    listenTo(eventName, handler){
        this.eventName = eventName;

        $(document).on(this.eventName, (e) => {
            return handler.call(this, this.data);
        });
    }
    _handleScroll(e){
        if(this.isLast) return;

        let scrollY = $(window).scrollTop();
        let bottomEdge = this.getBottomEdge(scrollY);
        let lowerY = this.getLowerY();

        if(bottomEdge < lowerY || this.isLoading) return;
        this.isLoading = true;
        page.addClass("__loading");

        $.ajax({
            url: this.options.url,
            type: "GET",
            data: this.reqData
        })
        .done((response) => {
            response = JSON.parse(response);

            this.data = response.data;
            this.isLast = response.isLast;

            this.updateTotalCount();
            $(document).trigger(this.eventName);
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
        this.reqData.totalCount += this.options.perRequest;
    }
    update(){
        this.data = [];
        this.isLoading = false;
        this.isLast = false;

        $.extend(this.reqData, { "totalCount": this.options.perRequest });
    }
    bind(){
        this._events();
    }
    unbind(){
        $(window).off();
    }
}

export default Lift;