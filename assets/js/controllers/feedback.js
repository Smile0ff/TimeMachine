"use strict";

import Response from "../core/response";

let page = $("#page"),
    feedbackForm = $("#feedback-form"),
    successHolder = feedbackForm.find(".success-holder");

class Feedback{

    constructor(){
        this._events();
    }
    _events(){
        feedbackForm.on("submit", (e) => { this._handleForm(e) });
    }
    _handleForm(e){
        e.preventDefault();

        if(!feedbackForm.valid()) return;
        let formData = feedbackForm.serializeArray(),
            formUrl = feedbackForm.attr("action");

        page.addClass("__loading");

        $.ajax({
            url: formUrl,
            type: "POST",
            data: formData
        })
        .done((response) => {
            response = JSON.parse(response);

            successHolder.html(`<p>${ response.message }</p>`);
            setTimeout(() => { successHolder.empty() }, 5000);

            feedbackForm[0].reset();
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

}

export default Feedback;