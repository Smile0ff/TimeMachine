"use strict";

import "jquery";
import "../helpers";
import Loader from "../lib/loader";
import isMobile from "../lib/isMobile";
import ScrollTop from "../lib/scrollTop";
import Menu from "../controllers/menu";
import AfficheLift from "../controllers/afficheLift";

new Loader();

$(() => {

    new ScrollTop();

    new Menu();
    new AfficheLift();

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});