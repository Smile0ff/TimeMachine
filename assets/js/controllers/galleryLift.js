"use strict";

import Lift from "../core/lift";
import photoAlbumItem from "../templates/photoAlbumItem.hbs!";

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
            let html = photoAlbumItem({ albums: data });
            el.append(html);
        });
    }
}

export default GalleryLift;