﻿##一.url是什么

>![url1.png](http://upload-images.jianshu.io/upload_images/5430633-6f19606f1ac3fbdd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


>url是统一定位符是对可以从上得到的资源的位置和访问方法的一种简洁的表示，是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。

* 也就是说我们可以通过url定位互联网的资源，文件图片等等。

##二.url的组成
　url的组成主要有两部分，一部分是协议，另一部分是域名（或ip地址），常见的协议有：

* http协议，常见的网络传输协议
* https协议，加密的网络传输协议( 在http协议中加入了SSL层，使得传输的信息更为安全 )
* file协议，从本地文件打开，定位于本地电脑
* //，与当前页面的协议保持一致


　
>　　IP地址是指互联网协议地址（英语：Internet Protocol Address，又译为网际协议地址），是IP Address的缩写。IP地址是IP协议提供的一种统一的地址格式，它为互联网上的每一个网络和每一台主机分配一个逻辑地址，以此来屏蔽物理地址的差异。

　　IP又分为公网地址IP和局域网IP，像一些学校的机房，企业事业单位的内网都是局域网。当我们输入url到浏览器按回车起，浏览器就开始查找url对应的ip地址，也就是下文的**域名**解析。我们在浏览器中输入的一般都是*https://www.baidu.com*这样的，**baidu.com**就是**域名**,之所以用域名来代替IP地址，其中最主要的原因就是更加语义化，更加方便记忆。

##三.域名解析的流程
  　**域名解析如下几种方式**

* 浏览器缓存--浏览器缓存DNS一段时间，以前访问过的网站
* host文件--在host中查找系统缓存，是否有与该域名对应的IP，一般是新网站
* 路由器缓存--路由器也会缓存域名信息
* 服务商查找缓存（如电信DNS）
* 如果都没有找到，则从根域名服务器查找对应IP,根域名服务器把请求转发给下一级，直到找到IP

##四.服务器处理
 　在IP寻址过程之后，浏览器向IP发送请求，服务器处理请求。**服务器**是一台安装系统的机器，系统里有专门处理请求的软件Web Server，如比较典型的apache，nginx，lls，接收用户请求返还给网站代码，或者接受请求连接到其他服务器。

##五.浏览器处理和网页绘制
　HTML字符串被浏览器接收后一句句解析，解析到link标签时重新发送请求获取CSS，解析到Script标签时发送请求获取JS，并执行代码，解析到IMG标签时获取图片，浏览器根据HTML和CSS 计算得到渲染树，绘制到屏幕上。