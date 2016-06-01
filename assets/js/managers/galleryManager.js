"use strict";

import Tags from "../controllers/tags";
import Timeline from "../controllers/timeline";
import GalleryLift from "../controllers/galleryLift";

class GalleryManager{

    constructor(){
        this.tags = new Tags();
        this.timeline = new Timeline();
        this.lift = new GalleryLift();

        this._actions();   
    }
    _actions(){
        $(document).on("tags:loadingStart", (e) => { this._loadingStart(e) })
                   .on("tags:loadingEnd", (e) => { this._loadingEnd(e) })
                   .on("tags:loadingError", (e) => { this._loadingError(e) })
                   .on("timeline:loadingStart", (e) => { this._loadingStart(e) })
                   .on("timeline:loadingEnd", (e) => { this._loadingEnd(e) })
                   .on("timeline:loadingError", (e) => { this._loadingError(e) });
    }
    _loadingStart(e){
        this.lift.unbind();

        return false;
    }
    _loadingEnd(e){
        this.lift.update();
        this.lift.bind();

        return false;
    }
    _loadingError(){
        this.lift.bind();
    }
}

export default GalleryManager;