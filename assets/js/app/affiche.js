"use strict";

import "jquery";
//import Loader from "../lib/loader";
import isMobile from "../lib/isMobile";
import Menu from "../controllers/menu";
import Lift from "../controllers/lift";

//new Loader();

$(() => {

    new Menu();
    new Lift();

});