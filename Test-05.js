
// ES5继承
function SubType(name, age){
	SuperType.call(this, 'nanjing');  	//  借用构造函数
	this.name = name;
	this.age= age;
}

SubType.prototype.sayHi = function(){
	alert("hi");
}


function SuperType(address){
	this.address = address;
}

SuperType.prototype.sayHello = function(){
	alert("hello");
}

Object.setPrototypeOf(SubType.prototype, SuperType.prototype);






// ES6继承相当于

// Object.setPrototypeOf(SubType, SuperType);
// Object.setPrototypeOf(SubType.prototype, SubType.prototype);
class SuperType{

	constructor(name){
		this.name = name;
	}

	sayHi(){
		console.log("hi there are SuperType");
	}
}


class SubType extends SuperType{
	constructor(name){
		super(name);
		this.age = 22;
	}

	sayHello(){
		console.log("hello there are SubType");
	}
}

let subType = new SubType('behippo');

subType.sayHi()
subType.sayHello();


// 区别ES5需要先建立子类的this，ES6在constructor中必需要先调用super()，子类是没有this的;
// ES6中的Class有两个继承链，可以继承类的静态方法