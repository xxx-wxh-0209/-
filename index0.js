// JavaScript Document
/*'use strict';
var id = function(el) {
	return document.getElementById(el);},
c=id('slides-list');
if(c){
	var u1=id('scroll'),
	lis = ul.getElementsByTagName('li'),
    itemCount = lis.length,
    width = lis[0].offsetWidth, //获得每个img容器的宽度
    marquee = function() {
           c.scrollLeft += 2;
             if(c.scrollLeft % width <= 1)
			 {  //当 c.scrollLeft 和 width 相等时，把第一个img追加到最后面
                ul.appendChild(ul.getElementsByTagName('li')[0]);
               c.scrollLeft = 0;   
			 };
           },
           speed = 5; //数值越大越慢
       ul.style.width = width*itemCount + 'px'; //加载完后设置容器长度        
       var timer = setInterval(marquee, speed);
       c.onmouseover = function() {
           clearInterval(timer);
       };
       c.onmouseout = function() {
           timer = setInterval(marquee, speed);
       };
}*/

