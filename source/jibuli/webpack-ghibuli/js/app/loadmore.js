var $ = require("../lib/jquery-3.2.1");
function Pubu($ct){
    this.srcArray = [1,2,3,4];
    this.$ct = $ct;
    this.imgWidth = 0;
    this.init();
}
Pubu.prototype.init = function(){
    var _this = this;
    // var srcArray = this.srcArray;
    var $ct = this.$ct;
    this.imgWidth = parseInt($ct.width()/4);
    var $loadbtn = $("<div class='loadmore'>加载更多</div>");
    $ct.before($loadbtn);
    $loadbtn.css({
        "text-align":"center",
        "margin":"10px auto",
        "padding":"3px",
        "border":"1px solid #ccc",
        "width":"80px",
        "color":"#888",
        "cursor":"pointer"
    })
    $loadbtn.on("click",function(){
        _this.loadImg(_this.srcArray);
    })
}
Pubu.prototype.loadImg = function(src){
    var _this = this;
    var imgWidth = this.imgWidth;
    var srcArray = _this.srcArray.map(function(x){
            return ("img/load ("+x+").jpg");
    })
    console.log(srcArray);
    for(var i = 0; i<srcArray.length; i++){
        var img = new Image();
        img.src = srcArray[i]; 
        $(img).width(imgWidth);
        _this.$ct.append($(img));
        img.onload = function(){
            _this.reset();
        }
    }
    this.srcArray = this.srcArray.map(function(x){
        return (x+4);
    })
}
Pubu.prototype.reset = function(){
    var number = 4;
    var arry = [];
    var $items = this.$ct.find("img");
    for(var i = 0; i<number; i++){
        arry[i] = 0;
    }
    $items.each(function(){
        var min = Math.min.apply(null,arry);
        var index = arry.indexOf(min);
        // console.log(this.width);
        // console.log(this.height);
        // console.log("Min"+min);
        // console.log("Index"+arry.indexOf(min));
        $(this).css("left",this.width*index+"px");
        $(this).css("top",min);
        arry[index] += this.height;
    })
}
module.exports = Pubu;
