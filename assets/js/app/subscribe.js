"use strict";

import "jquery";
import "jquery-validation";
import Loader from "../lib/loader";
import Menu from "../controllers/menu";
import Subscribition from "../controllers/subscribition";

new Loader();

$(() => {

    new Menu();
    new Subscribition();

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});