import * as d from "debug";

const debug = d(`my-app:basic`);
const debug2 = d(`m-app:basic`);

debug("debug info");
debug2("debug info2");