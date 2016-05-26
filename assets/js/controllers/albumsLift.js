"use strict";

import Lift from "../core/lift";
import albumItem from "../templates/albumItem.hbs!";

let el = $("#lift-holder");

class AlbumsLift extends Lift{

    constructor(){
        super(el, {
            url: "/php/albums.php",
            perRequest: 3
        });

        this.render();
    }
    render(){
        this.listenTo("data:loaded", (data) => {
            let html = albumItem({ albums: data });
            el.append(html);
        });
    }

}

export default AlbumsLift;