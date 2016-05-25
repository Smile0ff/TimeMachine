"use strict";

import config from "../appConfig";
import Lift from "../core/lift";
import blogItem from "../templates/blogItem.hbs!";

let el = $("#lift-holder");

class BlogLift extends Lift{

    constructor(){
        super(el, {
            url: "/php/blog.php",
            perRequest: config.lift.perRequest,
            params: config.lift.params
        });
    }
    render(data){
        let html = blogItem(data);
        el.append(html);
    }

}

export default BlogLift;