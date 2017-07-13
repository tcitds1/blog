    var $ = require("../lib/jquery-3.2.1");
    function Carousel($ct){
        this.$ct = $ct;
        this.check = true;
        this.pageIndex = 0;
        this.imgWidth = $ct.find("img").width();
        this.totalWidth = $ct.find(".showimg").width();
        this.init();
        this.bind();
    }
    Carousel.prototype.playNext = function(len){
        var imgWidth = this.imgWidth;
        var _this = this;
        var $showimg = this.$ct.find(".showimg");
        if(!this.check)
            return;
        this.check = false;
        $showimg.animate({left:"-="+(imgWidth*len)},function(){
            _this.pageIndex = _this.pageIndex + len ; 
            if(_this.pageIndex==4){
                $showimg.css("left","-"+imgWidth+"px");
                _this.pageIndex = 0;
            }
            _this.showActive();
            _this.check = true;
        });
    }
    Carousel.prototype.playPre = function(len){
        var imgWidth = this.imgWidth;
        var totalWidth = this.totalWidth;
        var _this = this;
        var $showimg = this.$ct.find(".showimg");
        if(!this.check)
            return;
        this.check = false;
        $showimg.animate({left:"+="+(imgWidth*len)},function(){
            _this.pageIndex = _this.pageIndex-len;
            if(_this.pageIndex<0){
                $showimg.css("left","-"+(totalWidth-2*imgWidth)+"px");
                _this.pageIndex=3;
            }
            _this.showActive();
            _this.check = true;
        })          
    }
    
    Carousel.prototype.init = function(){
        var imgWidth = this.imgWidth;
        var $ct = this.$ct;
        var $showimg = $ct.find(".showimg");
        var $first = $ct.find(".showimg li").first();
        var $last = $ct.find(".showimg li").last();
        $showimg.prepend($last.clone())
            .append($first.clone())
            .css("left","-"+imgWidth+"px")
        this.showActive();
    }
    Carousel.prototype.bind = function(){
        var _this = this;
        var $ct = this.$ct;
        var $prebtn = $ct.find(".prebtn");
        var $nextbtn = $ct.find(".nextbtn");
        var $xiabiao = $ct.find(".transimg li");
        $xiabiao.on("click",function(){
            var len;
            var index = $(this).index();
            if(index<_this.pageIndex){
                len = _this.pageIndex - index;
                _this.playPre(len);
            }
            else{
                len = index - _this.pageIndex;
                _this.playNext(len);
            }
        })
        $prebtn.on("click",function(){
            _this.playPre(1);
            console.log(_this.pageIndex);
        });
        $nextbtn.on("click",function(){
            _this.playNext(1);
            console.log(_this.pageIndex);
        })
    }
    Carousel.prototype.showActive = function(){
        var $xiabiao = this.$ct.find(".transimg li");
        $xiabiao.removeClass("active");
        var node = $xiabiao.get(this.pageIndex);
        $(node).addClass("active");
    }
    module.exports = Carousel;
