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
    // your implement
}