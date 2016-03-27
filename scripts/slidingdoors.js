window.onload =function() {
	 // body...  
	 // onload 表示页面所有元素和资源加载完毕
	 // 先找到要操作的对象，再进行操作
	 // 获得容器对象
	 var box = document.getElementById('container');
	 //获得图片NodeList对象集合
	 var imgs= box.getElementsByTagName("img");
	 //单张图片的宽度
	 var imgwidth = imgs[0].offsetWidth;

	 //设置掩藏门体露出的宽度
	 var exposewidth = 160;
	 //设置容器总宽度
	 var boxwidth = imgwidth +(imgs.length - 1) * exposewidth;
	 //style 是dom里进行css设置的 注意加px
	 box.style.width = boxwidth + 'px';

	function setimgspos () {
		 // body...  
	 //设置每道门的初始位置
	 for (var i=1,len=imgs.length; i<len;i++) {
	 	imgs[i].style.left = imgwidth + exposewidth *(i-1) + 'px';
	 	}
	 }
	 setimgspos();
	 //计算每道门打开时候应移动的距离
	 var translate = imgwidth - exposewidth;

	 //为每道门绑定事件
	 for (var i = 0,len=imgs.length; i <len; i++) {
	 	//使用立即调用的函数表达式，为了获得不同的i值
	 	(function (i) {
	 		 /* body... */
	 		  imgs[i].onmouseover = function () {
	 		  	 /* body... 先将每道门复位*/
	 		  	 setimgspos();
	 		  	 //打开门
	 		  	 for (var j = 1; j <= i; j++) {
	 		 		imgs[j].style.left = parseInt(imgs[j].style.left, 10)-translate +'px';
	 		 }
	 		};

	 		})(i);

	 	}


};