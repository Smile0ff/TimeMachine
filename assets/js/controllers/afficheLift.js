"use strict";

import Lift from "../core/lift";
import afficheItem from "../templates/afficheItem.hbs!";

let el = $("#lift-holder");

class AfficheLift extends Lift{

    constructor(){
        super(el, {
            url: "/php/affiche.php",
            perRequest: 3
        });

        this.render();
    }
    render(){
        this.listenTo("data:loaded", (data) => {
            let html = afficheItem({ concerts: data });
            el.append(html);
        });
    }

}

export default AfficheLift;