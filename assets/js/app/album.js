"use strict";

import "jquery";
import "es6-promise";
import "fetch";
import "../helpers";

import Loader from "../lib/loader";
import isIE from "../lib/isIE";
import isMobile from "../lib/isMobile";
import MobileHover from "../lib/mobileHover";
import Player from "../core/player";
import Menu from "../controllers/menu";
import Tracks from "../controllers/tracks";

new Loader();

$(() => {

    new Menu();
    new Tracks();

    if(!isMobile() && !isIE()){
        new Player();
    }
    if(isMobile()){
        new MobileHover();
    }

    if(isIE()) $("body").addClass("__ie");
    if(isMobile()) $("body").addClass("__mobile");

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});