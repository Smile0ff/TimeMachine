"use strict";

import "jquery";
import "es6-promise";
import "fetch";
import "../helpers";

import Loader from "../lib/loader";
import isMobile from "../lib/isMobile";
import Player from "../core/player";
import Menu from "../controllers/menu";
import Tracks from "../controllers/tracks";


new Loader();

$(() => {

    new Menu();
    new Tracks();

    //if(!isMobile()) new Player();

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});