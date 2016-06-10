"use strict";

import "jquery";
import Loader from "../lib/loader";
import ScrollTop from "../lib/scrollTop";
import Menu from "../controllers/menu";

new Loader();

$(() => {

    new ScrollTop();
    new Menu();

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});