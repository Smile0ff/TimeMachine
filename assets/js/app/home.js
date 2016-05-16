"use strict";

import "jquery";
//import Loader from "../lib/loader";
import isMobile from "../lib/isMobile";
import Menu from "../controllers/menu";
import Switcher from "../controllers/switcher";


//new Loader();

$(() => {

    new Menu();

    if(!isMobile()){
        new Switcher();
    }
    
    if(isMobile()){
        new MobileMenu();
    }

});