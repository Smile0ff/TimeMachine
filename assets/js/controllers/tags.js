"use strict";

import Response from "../core/response";
import photoAlbumItem from "../templates/photoAlbumItem.hbs!";

let page = $("#page");
let el = $("#tags-holder");
let holder = $("#lift-holder");

class Tags{

    constructor(){
        this.isLoading = false;

        this._events();
    }
    _events(){
        el.on("click", ".tag", (e) => { this._handleTag(e) });
    }
    _handleTag(e){
        if(this.isLoading) return;
        e.preventDefault();

        let target = $(e.currentTarget);
        let tagId = target.data("tag-id");

        this.isLoading = true;
        page.addClass("__loading");
        $(document).trigger("tags:loadingStart");

        $.ajax({
            url: "php/tags.php",
            type: "GET",
            data: { tagId: tagId }
        })
        .done((response) => {
            response = JSON.parse(response);

            window.setTimeout(() => {

                window.scrollTo(0, 0);

                this.render(response.data);
                target
                    .closest("li")
                    .addClass("active")
                    .siblings()
                    .removeClass("active");

                $(document).trigger("tags:loadingEnd");
            }, 100);
        })
        .fail((error) => {
            error = JSON.parse(error.responseText);
            new Response(error);

            $(document).trigger("tags:loadingError");
        })
        .always(() => {
            this.isLoading = false;
            page.removeClass("__loading");
        });

        return false;    
    }
    render(data){
        let html = photoAlbumItem({ albums: data });
        holder.html(html);
    }
}

export default Tags;