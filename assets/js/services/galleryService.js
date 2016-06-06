"use strict";

const REQUEST_URL = "/php/gallery.php";

class GalleryService{

    constructor(params = {}){
        this.params = params;
    }
    getData(params = {}){
        this.params = params;

        return $.ajax({
            url: REQUEST_URL,
            type: "GET",
            data: this.params
        });

    }
}

export default GalleryService;