"use strict";

import Handlebars from "handlebars/handlebars.runtime";

Handlebars.registerHelper("dump", (context) => {
    console.log(context);
});

export default "helpers";