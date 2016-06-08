"use strict";

import "jquery";
import "../helpers";
import Loader from "../lib/loader";
import isMobile from "../lib/isMobile";
import ScrollTop from "../lib/scrollTop";
import Menu from "../controllers/menu";
import PhotoGrid from "../controllers/photoGrid";
import Carousel from "../controllers/carousel";

new Loader();

$(() => {

    new ScrollTop();

    new Menu();

    if(!isMobile()) new PhotoGrid();
    if(!isMobile()) new Carousel();

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});