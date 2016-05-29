"use strict";

import Response from "../core/response";
import songText from "../templates/songText.hbs!";

let page = $("#page");
let el = $("#tracks-holder");
let songTextHolder = $("#song-text-holder");

let isActive = false;
let isNotes = false;

class Tracks{

    constructor(){
        this._events();
    }
    _events(){
        el.on("click", ".song", (e) => { this._handleTrack(e) })
          .on("click", ".show-notes", (e) => { this._toggleNotes(e) })
          .on("click", ".close-text", (e) => { this._backToList(e) });
    }
    _handleTrack(e){
        let target = $(e.currentTarget);
        let sondId = target.data("song-id");

        page.addClass("__loading");

        $.ajax({
            url: "/php/song.php",
            type: "GET",
            data: { sondId: sondId }
        })
        .done((response) => {
            response = JSON.parse(response);

            isActive = true;
            el.addClass("active");

            let paragraphs = this.splitByDBLNewLine(response.data);
            this.render(paragraphs);
        })
        .fail((error) => {
            error = JSON.parse(error.responseText);
            new Response(error);
        })
        .always(() => { page.removeClass("__loading"); });

        return false;
    }
    _toggleNotes(e){
        e.preventDefault();

        if(!isActive) return;

        isNotes ? el.removeClass("notes-on") : el.addClass("notes-on");
        isNotes = !isNotes;

        return false;
    }
    _backToList(e){
        isActive = false;
        isNotes = false;

        el.removeClass("active notes-on");
        return false;
    }
    splitByDBLNewLine(data){
        return data.split(/\n\s*\n/g);
    }
    render(paragraphs){
        let html = songText({ paragraphs: paragraphs });
        songTextHolder.html(html);
    }

}

export default Tracks;