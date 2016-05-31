"use strict";

import Lift from "../core/lift";
import galleryItem from "../templates/galleryItem.hbs!";

let el = $("#lift-holder");

class GalleryLift extends Lift{

    constructor(){
        super(el, {
            url: "/php/gallery.php",
            perRequest: 3
        });

        this.render();
    }
    render(){
        this.listenTo("data:loaded", (data) => {
            let html = galleryItem({ albums: data });
            el.append(html);
        });
    }

}

export default GalleryLift;