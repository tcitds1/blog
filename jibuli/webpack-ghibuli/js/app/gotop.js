
        var $ = require("../lib/jquery-3.2.1");
        function GoTop($ct){
            this.$ct = $ct;
            this.$node=null;
            this.createNode();
            this.bindEvent();
        }
        GoTop.prototype.createNode = function(){
            var $node = $("<div id = 'top'></div>");
            $node.css({
                 "position":"fixed",
                 "top":"100%",
                 "left":"100%",
                 "margin-left":"-32px",
                 "margin-top":"-32px",
                 "background-color":"rgb(213, 219, 231)",
                 "background-image": "url(img/top.png)",
                 "cursor": "pointer"
             });
            this.$node = $node;
            this.$ct.append($node);
            $node.hide();
            //  $(this.ct).append("<button id = "+"'"+this.target+"'"+">回到顶部</button>");
            //          #top {
            //     width: 50px;
            //     height: 50px;
            //     position: fixed;
            //     top:100%;
            //     left:100%;
            //     margin-left: -50px;
            //     margin-top: -50px;
            // }
            };
            GoTop.prototype.bindEvent = function(){
            // var $gotop = $("#"+this.target);
                var _this = this;
                var window_height = $(window).height();
                $(window).scroll(function(){
                    if($(window).scrollTop()>window_height){
                        _this.$node.show();
                    }
                    else{
                        _this.$node.hide();
                    }
                })
                this.$node.on("click",function(){
                    var timeId;
                    var top = $(window).scrollTop();
                    timeId = setInterval(function(){
                        top -= 30;
                        if(top<=0){
                            clearInterval(timeId);
                        }
                        $(window).scrollTop(top);  
                    },1)
                })
            }
            module.exports = GoTop;
