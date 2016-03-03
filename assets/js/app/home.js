"use strict";

import "jquery";
import Switcher from "../lib/switcher";
import MobileHover from "../lib/mobileHover";

$(() => {

    //here should go mobile detection and check

    new Switcher(); //disable on mobile
    new MobileHover(); //active on mobile

});