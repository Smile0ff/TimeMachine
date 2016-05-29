"use strict";

import responseTpl from "../templates/responseTpl.hbs!";

class Response{

    constructor(data){
        this.el = $("#ajax-response-holder");
        
        this._events();
        this.render(data);
    }
    _events(){
        this.el.on("click", (e) => { this._closeResponse(e) });
    }
    _closeResponse(e){
        let target = $(e.target);

        if(target.is(".close") || target.closest(".outer").length <= 0){
            this.el.removeClass("active");
            this.el.off();
        }
        return false;
    }
    render(data){
        let html = responseTpl({ error: data });
        this.el.html(html).addClass("active");
    }
}

export default Response;