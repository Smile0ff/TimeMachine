"use strict";

import subscribeTpl from "../templates/subscribe.hbs!";

let page = $("#page");
let subscribeHolder = $("#subscribe-holder");

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

            this.render(response);
        })
        .fail((error) => {

        })
        .always(() => {
            page.removeClass("__loading");
        });
        
        return false;
    }
    render(data){
        let html = subscribeTpl(data);
        subscribeHolder.html(html);
    }
}

export default Subscribition;