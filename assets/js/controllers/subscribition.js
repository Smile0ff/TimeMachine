"use strict";

import Response from "../core/response";

let page = $("#page");
let subscribeDataContainer = $("#subscribe-data-container");

class Subscribition{

    constructor(){
        this._events();
    }
    _events(){
        page.on("submit", "#subscribe-form", (e) => { this._handleForm(e) });
    }
    _handleForm(e){
        e.preventDefault();
        let form = $(e.currentTarget);
        let formData = form.serializeArray();
        let formUrl = form.attr("action");

        if(!$(form).valid()) return;
        
        page.addClass("__loading");

        $.ajax({
            url: formUrl,
            type: "POST",
            data: formData
        })
        .done((response) => {
            response = JSON.parse(response);

            form[0].reset();

            this.render(response.message);
        })
        .fail((error) => {
            error = JSON.parse(error.responseText);
            new Response(error);
        })
        .always(() => {
            page.removeClass("__loading");
        });
        
        return false;
    }
    render(message){
        subscribeDataContainer.html(`<p>${ message }</p>`).addClass("active");
    }
}

export default Subscribition;