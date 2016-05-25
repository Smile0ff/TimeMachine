"use strict";

import "jquery";
import "../helpers";
//import Loader from "../lib/loader";
import isMobile from "../lib/isMobile";
import ScrollTop from "../lib/scrollTop";
import Menu from "../controllers/menu";
import BlogLift from "../controllers/blogLift";

//new Loader();

$(() => {

    new ScrollTop();

    new Menu();
    new BlogLift();

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});