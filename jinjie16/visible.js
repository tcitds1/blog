function isVisible($node){
    var scrollTop = $node.scrollTop();
    var offsetTop = $node.offset().top;
    var windowHeight = $(window).height;
    var itHeight = $node.outerHeight(true);
    if((offsetTop<scrollTop + windowHeight - itHeight)&&(offsetTop>scrollTop))
        return true;
    else
        return false;
}