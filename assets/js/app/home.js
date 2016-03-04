"use strict";

import "jquery";
//import Loader from "../lib/loader";
import isMobile from "../lib/isMobile";
import Switcher from "../lib/switcher";
import MobileMenu from "../lib/mobileMenu";

//new Loader();

$(() => {

    if(!isMobile()){
        new Switcher();
    }
    
    if(isMobile()){
        new MobileMenu();
    }

});