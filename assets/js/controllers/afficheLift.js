"use strict";

import config from "../appConfig";
import Lift from "../core/lift";
import afficheItem from "../templates/afficheItem.hbs!";

let el = $("#lift-holder");

class AfficheLift extends Lift{

    constructor(){
        super(el, {
            url: "/php/affiche.php",
            perRequest: config.lift.perRequest,
            params: config.lift.params
        });
    }
    render(data){
        let html = afficheItem(data);
        el.append(html);
    }

}

export default AfficheLift;