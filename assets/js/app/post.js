"use strict";

import "jquery";
import "social-likes";
//import Loader from "../lib/loader";
import Menu from "../controllers/menu";

//new Loader();

$(() => {

    new Menu();
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});