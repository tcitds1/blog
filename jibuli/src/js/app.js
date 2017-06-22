requirejs.config({
    baseUrl: './js',
    paths: {
        jquery: 'lib/jquery-3.2.1',
    }
});

// Start the main app logic.
requirejs(['jquery','app/carousel','app/gotop','app/loadmore'],
function   ($,Carousel,GoTop,Loadmore) {
    new Carousel($("#header .ct"));
    new GoTop($("body"));
    new Loadmore($(".loadmore"));
    // new GoTop("body","top");
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});

