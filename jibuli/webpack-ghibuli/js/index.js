
var $ = require("./lib/jquery-3.2.1");

var Carousel = require("./app/carousel");
var GoTop = require("./app/gotop");
var Loadmore = require("./app/loadmore");

new Carousel($("#header .ct"));
new GoTop($("body"));
new Loadmore($(".loadmore"));

