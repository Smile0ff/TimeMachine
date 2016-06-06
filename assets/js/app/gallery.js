"use strict";

import "jquery";
import "../helpers";

import Loader from "../lib/loader";
import isMobile from "../lib/isMobile";
import ScrollTop from "../lib/scrollTop";

import Menu from "../controllers/menu";
import GalleryMobileLift from "../controllers/galleryMobileLift";

import GalleryManager from "../managers/galleryManager";

new Loader();

$(() => {

    new ScrollTop();

    new Menu();
    !isMobile() ? new GalleryManager() : new GalleryMobileLift();

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});