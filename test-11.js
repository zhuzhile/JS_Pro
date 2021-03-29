// 解决this指向（通过对象调用方式）
// 解决参数问题

// apply实现
Function.prototype.myApply = function (context){
	context.fn = this;

	let result = context.fn(...arguments[1]);

	delete context.fn
	return result;
}	


// call实现
Function.prototype.myCall =  function(context){
	context.fn = this;
	let args  = [...arguments].slice(1);

	let result = context.fn(...args);

	delete context.fn
	return result;
}


// bind实现
Function.prototype.myBind = function (context){
	if(typeof this  !== 'function'){
		throw new Error('mybind --- type error');
	}

	let self = this;
	let args = [... arguments].slice(1);

	return function(){
		self.apply(context, args.concat(Array.prototype.slice.call(arguments)));
	}
}

let person = {
	name:'behippo'
}


function showLog(des1, des2){
	console.log(this.name, des1, des2);
}

showLog.myCall(person, "is handsome", "and smart");

showLog.myApply(person, ["is handsome", "and smart"]);

let show = showLog.myBind(person, "is handsome");
show("and smart");


// new实现
// 1. 建立新的this
// 2. 将函数的原型属性以及各种属性赋值
// 3. 返回this

// 函数如果返回的是基本类型

function Person(name, age){
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function (){
	console.log(this.name)
};

function objFactory(){
	let obj = new Object();
	const Constructor = [].shift.call(arguments) 
	obj.__proto__ =  Constructor.prototype;
	let ret = Constructor.apply(obj, arguments);

	return typeof ret === 'object' ? ret : obj;
}

let person = objFactory(Person);


// bind具体实现
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}


// 1. 考虑返回函数使用new的特殊情况
// 2. 闭包使用 

Function.prototype.myBind = function(context){
	let self = this;
	let arg = Array.prototype.slice.call(arguments, 1);

	if(typeof this !== 'object'){
		throw new Error("类型不匹配");
	}

	return function(){
		let brg = [...arguments];
		self.apply(this instanceof self ? this:context, arg.concat(brg));
	}
}








