"use strict";

import config from "../appConfig";
import Lift from "../core/lift";
import bandItem from "../templates/bandItem.hbs!";

let el = $("#lift-holder");

class BandLift extends Lift{

    constructor(){
        super(el, {
            url: "/php/band.php",
            perRequest: config.lift.perRequest,
            params: config.lift.params
        });
    }
    render(data){
        let html = bandItem(data);
        el.append(html);
    }

}

export default BandLift;