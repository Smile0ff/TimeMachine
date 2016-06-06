"use strict";

import Lift from "../core/lift";
import afficheItem from "../templates/photoAlbumItem.hbs!";

let el = $("#lift-holder");

class GalleryMobileLift extends Lift{

    constructor(){
        super(el, {
            url: "/php/gallery.php",
            perRequest: 3
        });

        this.render();
    }
    render(){
        this.listenTo("data:loaded", (data) => {
            let html = afficheItem({ albums: data });
            el.append(html);
        });
    }

}

export default GalleryMobileLift;