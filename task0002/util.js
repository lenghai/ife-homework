//判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
	return arr instanceof Array;
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return fn instanceof Function;
}




// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
    function cloneObject(src) {
    if(typeof(src) == "object") {
    	var result = src instanceof Array ? [] : {};
    	for(var i in src) {
    		var attr = src[i];
    		result[i] = arguments.callee(attr);
    	}
    	return result;
    }
    else {
    	return src;
    }
}


// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"




// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var newArr = [arr[0]];
	var bool = false;
    for(var i=1;i<arr.length;i++) {
    	for(var j=0;j<newArr.length;j++) {
    		if (newArr[j] == a[i]) {
    			bool = true;
    			break;
    		}
    	}
    	if (bool == false) {
    		newArr[newArr.length] = arr[i];
    	}
    	else {
    		bool = false;
    	}
    }
    return newArr;
}

// 使用示例
var a = [1, 3, 5, 7, 5, 3,2];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]




// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和
//尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    while(str.charAt(0) == " ") {
        str = str.substr(1);
    }
    while(str.charAt(str.length-1) == " ") {
        str = str.slice(0,-2);
    }
    return str;
}

//测试用例
var mystr = "   wo s s   ";
var b = simpleTrim(mystr);
console.log(b);




// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    var newStr = str.replace(/^\s+|\s+$/g,"");
    return newStr;
}

// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'






// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i = 0;i<arr.length;i++) {
        fn(arr[i],i);
    }
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html





// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var count = 0;
    for(var k in obj) {
        if(obj.hasOwnProperty(k)) {
            count++;
        }
    }
    return count;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3




// 判断是否为邮箱地址
function isEmail(emailStr) {
    var pattern = /^[a-z0-9](\w|\.|-)*@([a-z0-9]+-?[a-z0-9]+\.){1,3}[a-z]{2,4}$/i;
    return pattern.test(emailStr);
}




// 判断是否为手机号
function isMobilePhone(phone) {
    var pattern = /(^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/;
     return pattern.test(phone);
}





// 为element增加一个样式名为newClassName的新样式
function hasClass(element, oClass) {
    var strclass = element.className;
    return strclass.indexOf(oClass) === -1 ? false : true;
}

function addClass(element, newClassName) {
   if(!hasClass(element, newClassName)) {
    element.className + = " " + newClassName;
   }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    if(hasClass(element, oldClassName)) {
        var newCla = element.className + " ";
       element.className = trim(newCla.replace(oldClassName + " ", ""));
    }
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
   return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var obj = {};
    var top = element.offsetTop;
    var left = element.offsetLeft;
    var current = element;
    while (element.offsetParent !== null) {
         left += current.offsetLeft;
        top += current.offsetTop;
        current = current.offsetParent;
    }
    var scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    left -= scrollLeft;
    top -= scrollTop;
    obj.x = left;
    obj.y = top;
    return obj;
}






// 实现一个简单的Query

   function $(selector) {
    var result,theEle,ele;
    var arr = selector.replace(/\s+/g," ").split(" ");
    
    function getEle(str,ele) {
        switch (str.charAt(0)) {

        case "#" :
            result = ele.getElementById(str.substr(1));
            break;
        case "." :
            result = ele.getElementsByClassName(str.substr(1))[0]; 
            break;
        case "[" : 
            var temp = ele.getElementsByTagName("*");
            var tLen = temp.length;
            if(str.indexOf("=") !== -1) {
                var key = str.substring(1,str.indexOf("="));
                var value = str.substring(str.indexOf("=") + 1,str.length-1);
                for (var j = 0; j < tLen; j++) {
                    if (temp[j][key] === value) {
                        result = temp[j];
                        break
                    }
                }
            }
            else {
                var key = str.substring(1,str.length -1);
                for (var j = 0 ;j < tLen; j++) {
                    if (temp[j][key]) {
                        result = temp[j];
                        break;
                    }
                }
            }
        default :  
            result = ele.getElementsByTagName(str)[0];
            break;
    }
    return result;
    }
    
    if (arr.length === 1) {
        theEle = getEle(arr[0],"document");
    }
    else {
        var ele = getEle(arr[0],"document");
        theEle = getEle(arr[1],ele);
    }
    return theEle;
}

// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象







// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event,listener,false);//DOM2
    } else if (element.attachEvent) {
        element.attachEvent("on" + event,listener);//IE
    } else {
        element["on" + event] = listener;//DOM0
    }
}

// 例如：
function clicklistener(event) {
    ...
}
addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if (element.removeEventListener) {
        element.removeEventListener(event,listener,false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + event,listener);
    } else {
        element["on" + event] = null;
    }
}




// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element,"click",listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element,"keydown",function(event) {
        var event = event|| window.event;
        var keyCode = event.which || event.keyCode;
        if (event.keyCode === 13) {
            listener.call(element,event)
        }
    });
}





//接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法

//addEvent(element, event, listener) -> $.on(element, event, listener);
//removeEvent(element, event, listener) -> $.un(element, event, listener);
//addClickEvent(element, listener) -> $.click(element, listener);
//addEnterEvent(element, listener) -> $.enter(element, listener);

$.on = addEvent;
$.un = removeEvent;
$.click = addClickEvent;
$.enter = addEnterEvent;




// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    addEvent(element,eventName,function() {

    });
}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
$.delegate($("#list"), "li", "click", clickHandle);