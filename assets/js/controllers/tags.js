"use strict";

class Tags{

    constructor(el){
        this.current = el.find("li.active > a.tag");
        this.tagId = this.current.data("tag-id");
    }
    setCurrent(e){
        this.current = $(e.currentTarget);
        return this;
    }
    setTagId(){
        if(!this.current) return;
        this.tagId = this.current.data("tag-id");

        return this;
    }
    activateCurrent(){
        this.current
            .closest("li")
            .addClass("active")
            .siblings()
            .removeClass("active");
    }
}

export default Tags;