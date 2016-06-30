"use strict";

import "jquery";
import "jquery-validation";
import "../helpers";
import Loader from "../lib/loader";
import isMobile from "../lib/isMobile";
import Menu from "../controllers/menu";
import Feedback from "../controllers/feedback";

new Loader();

$(() => {

    new Menu();
    new Feedback();

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});