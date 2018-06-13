bom   浏览器对象模型  
1.window只带的是整个浏览器（所有浏览器都支持，无兼容性问题），全局的对象变量函数都是window的对象的成员，全局函数是window的方法 
 
	位置：screenX，screenY(ie不支持，浏览器到屏幕左上角的距离)  
	大小：innerWidth，innerHeith（浏览器文档大小）  
	计时器
	
2.history对象   历史记录  

	history.back 后退一个  
	history.forward	前进一个  
	history.go(3)  向前跳三个网页  

3.location对象   操作URL的 
 
	location.reload()      等同于F5刷新
	location.replace()     无历史记录，返回不了  

4.screen对象   客服端屏幕的信息 
 
	screen.width，screen.height获取当前客户端的分辨率  

5.navigator对象    


DOM对象（文档对象模型）   

	document.getElementById()  
	document.getElenmentsByTagName()		通过标签名获取  
	document.getElenmentsByName()			name在form中的时候可以获取，但是出现在如div中就不能正常获取	  
	document.getElenmentsByClassName()		所有ie都不支持  

操作元素内容 
 
	innerText   不会想innerHTML获取标签里的所有东西，只获取文本，不会获取标签。  
	IE不支持innerText，FF不支持innerHTML  
	获取属性：getAttribut  
	获取自定义属性：setAttribut


事件驱动模型
	
	1.事件驱动三要素：
		事件源、事件、事件处理函数（事件句柄）

	2.表单事件：
	onsubmit  为flase禁止提交，官方的用法

	页面事件
	onload 等所有节点加载完毕，

DOM0与D0M2的区别
	
	DOM0与DOM2的事件处理方法不同
	DOM0所有浏览器都支持
	DOM0的事件处理方法兼容各种浏览器
	DOM2添加了事件监听器，实现了事件的冒泡和捕获（从目标事件源到浏览器顶层对象，从浏览器顶层对象向下抓取到目标事件源）

	IE浏览器不支持捕获 使用arrachEvent(''),detachEvent('') 没有最后的参数，IE版的要写上'on'，非IE版的不用写

事件对象

	所有事件源对象指event对象
	IE：event
	w3c：e
	兼容问题：
		e=event||e;    (如第一个是null时隐式转换为fales，这时选第二个)类似与三目

	event.target（获取本次事件的事件源）
	改变事件源： call、apply出了改变this指向，还会立即调用一次此函数
				bind不会调用函数

事件流

	三个类型
		冒泡、捕获、DOM标准的事件模型

	DOM标准事件模型：支持两种事件类型（冒泡，捕获）；先捕获，再冒泡。

大多数默认最顶层是window；有些是document。

阻止事件流：IE:event.cancelBubble=true;FF:event.stopPropagation();  
目标事件源IE：srcElement(IE8以下使用)  FF：targe

兼容 
	let e=event||e;
	let targe=e.srcElement||e.targe
	targe  