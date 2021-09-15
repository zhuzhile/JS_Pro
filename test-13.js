// 复杂数据类型去重
function unique(array){
	let obj = {};

	return array.filter( item => obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true));
}


let arry = [{'a' : 'go fuck youself', 'b' :'what the fuck'},{'b' :'what the fuck'},{'b' :'what the fuck'}];

unique(arry);


// 深拷贝
function deepClone(target, map = new Map()){
	
	if(typeof target == 'object'){
		let obj = Array.isArray(target) ? [] : {};

		if(map.get(target)){
			return map.get(target);
		}

		map.set(target, obj);

		for(let item in target){
			obj[item] = deepClone(target[item], map);
		}

		return obj;
	}else{
		return target;
	}
}

target = {'a': 1, 'b' : 2 , 'c' : 'a', 'd': {'a' : 'go fuck youself', 'b' :'go lick youself'}};
target.target = target;

deepClone(target);

// 扁平化
function flatten(arr){
	
	while(arr.some( item => Array.isArray(item))){
		arr = [].concat(...arr);
	}

	return arr;
}



let arr = [['a','b','c', ['c', 'd']], 'a', 'b'];


flatten(arr);

function flatten(arr){
	let result = [];

	for(let item of arr){
		if(Array.isArray(item)){
			result = result.concat(flatten(item));
		}else{
			result.push(item);
		}
	}

	return result;
}

// 快速排序
function quickSort(arr){

	if(arr.length < 2){
		return arr;
	}

	let mid = Math.floor(arr.length / 2);
	let pivot = arr.splice(mid, 1)[0]
	let left = [];
	let right = [];

	for(let item of arr){
		if(item < pivot){
			left.push(item);
		}else{
			right.push(item);
		}
	} 

	return quickSort(left).concat(pivot, quickSort(right));
}

// 模拟instanceof
function _instanceOf(left, right){
	left  = Object.getPrototypeOf(left);
	right = right.prototype;

	while(true){
		if(right == left){
			return true;
		}

		if(left == null){
			return false;
		}

		left = Obect.getPrototypeOf(left);
	}
}

// 模拟new
function objFactory(){
	let obj = {};

	let Constructor = [].shift.call(arguments);

	obj.__proto__ = Constructor.prototype;

	let res = Constructor.apply(obj, arguments);

	return typeof res == "object" ? res : obj;
}


let sub = objFactory(SubType);

// 模拟call
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}

// apply方法模拟实现
Function.prototype.apply = function (context, arr) {
    var context = context || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}


// 模拟bind方法
Function.prototype.bind2 = function(context){
	let self = this;
	let arg = Array.prototype.slice.call(arguments, 1);

	return function(){
		let bindArgs = Array.prototype.slice.call(arguments);

		self.apply(context, arg.concat(bindArgs));
	}
}


// 模拟继承方法
function SubType(male){
	this.sex = male;
	SuperType.call(this, 'bemount', 'nanjing');
}


function SuperType(name, address){
	this.name = name;
	this.address = address;
}

SuperType.prototype.sayName = function(){
	console.log(this.name);
}


let obj = Object.create(SuperType.prototype);

obj.Constructor = SubType;

SubType.prototype = obj;

let sub = new SubType();

// 节流时间戳

function throttle(func, wait){

	let previous = 0;

	return function(){
		let now = +new Date();
		let context = this;

		if(now - previous >= wait){
			func.apply(context, arguments);
			previous = now;
		}
	}
}

function sayhello(bala){
	console.log('hello' + " " + bala);
}

let fn = throttle(sayhello, 1000);

fn('go fuck yourself');



function deepClone(target, map = new Map()){
	if(typeof target == 'object'){
		let obj = Array.isArray(target) ? [] : {};

 		if(map.get(target)){
			return map.get(target)		
		}

		map.set(target, obj);

		for(let item in target){
			obj[item] = deepClone(target[item], map);
		}

		return obj;
	}else{
		return target;
	}
}


let target = {'a' :'b', 'b' :'c'};
target.target = target;

deepClone(target);



function SubType(name, age){
	SuperType.call(this,name);
	this.age = age;
}

function SuperType(name){
	this.name = name;
}

SuperType.prototype.sayHi = function(){
	console.log('hi' + this.name);
}


function inheritProtoType(SuperType, SubType){
	let prototype = Object.create(SuperType.prototype);
	prototype.constructor = SubType;
	SubType.prototype = prototype;
}

inheritProtoType(SuperType, SubType);

SubType.prototype.sayAge = function(){
	console.log(`${this.name}  is  ${this.age} years old`);
}


let sub = new SubType('bemount', '23');

sub.sayHi();
sub.sayAge();


function mergeSort(arr){

	if(arr.length < 2){
		return arr;
	}

	let middle = Math.floor(arr.length / 2);

	let left = mergeSort(arr.slice(0, middle));
	let right = mergeSort(arr.slice(middle));

	return merge(left, right);
}


function merge(left, right){
	let result = [];

	while(left.length && right.length){
		if(left[0] <= right[0]){
			result.push(left[0])
			left.shift();
		}else{
			result.push(right[0]);
			right.shift();
		}
	}

	if(left.length){
		result.push(...left);
	}


	if(right.length){
		result.push(...right);
	}

	return result;
}


let arr = [2,2,4,1,0,-5,9,4];

function quickSort(arr){
	let len = arr.length;

	if(len < 2){
		return arr;
	}

	let mid = len >> 1;
	let pivot = arr.splice(mid, 1)[0];
	let right_arr = [], left_arr = [];

	for(let item of arr){
		if(item < pivot){
			left_arr.push(item);
		}else{
			right_arr.push(item);
		}
	}

   let left = quickSort(left_arr);
   left.push(pivot);
   let right = quickSort(right_arr);

   return left.concat(right);
}

quickSort(arr);



let arr = [1,2,3];

arr.reduce((pre, cur) => {
	return pre.then(() => {
		return new Promise(r => {
			setTimeout(() => r(console.log(cur)), 1000)
		})
	})
}, Promise.resolve())


// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：
function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}


function light(cb, wait){

	return new Promise( res => {
		setTimeout( () => {
			cb();
			res()}, wait)
	})
}


function step(){
	Promise.resolve().then( () => {
		return light(red, 3000);
	}).then( () => {
		return light(yellow, 2000);
	}).then( () => {
		return light(green, 1000);
	}).then( () => {
		step();
	})
}

step();


let arr = [1,2,3];

arr.reduce( (pre, cur) => {
	return pre.then( () => {
		return new Promise((res) => {
			setTimeout(() => {console.log(cur);res()}, 2000);
		})
	} )
}, Promise.resolve());


let arr = [1, 2 ,3];

arr.reduce((pre, cur) => {
	return pre.then( () => {
		return new Promise((res) => {
			setTimeout(() => {console.log(cur); res()}, 2000)
		})
	})
}, Promise.resolve())


let arr = [1,2,3];

arr.reduce((pre, cur) =>{
	return pre.then( () => {
		return new Promise( res => {
			setTimeout(() => {console.log(cur); res();}, 1000);
		})
	})
} , Promise.resolve())
       


try{
let a = Promise.reject('b');
}catch(e){
 a = e;
}

console.log(a);


 


function findPathToTarget(start, end){
	let arr = [
			[0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0],
            [0,1,1,1,0,0,0,0,1,0,0],
            [0,1,0,0,0,0,0,1,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0],
            [0,0,0,1,1,1,1,1,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0]]


    let queue = [];
    let [i,j] = start;

    for(let item of directions){
    	if(arr[i + direction[0]][ j + direction[1]] === 0){
    		queue.push()
    	}


    }

    let steps = 0;

    while(queue.length){

    	for(let i = 0, len = queue.length; i < len;i++){
    		 let cur = queue.shift();
    		 []
    	}	

    	steps ++;
    }


	let directions = [[-1,0],[1,0],[0,1],[0,-1]];
	let result = [];
	let row = arr.length, col = arr[0].length;

	deepSearch(arr, result, row, col, start[0], start[1], end, 0, directions);

	return Math.min(...result);
}


function deepSearch(grid, result, row, col, i, j, end, depth, directions){


	if(i === end[0] && j == end[1]){
		result.push(depth);
		return;
	}


	if( i >= row || j >= row || i < 0 || j < 0 || grid[i][j] != 0){
		return;
	}

	grid[i][j] = 1;

	for(let direction of directions){
		deepSearch(grid, result, row, col, i + direction[0], j + direction[1], end, depth + 1, directions);
	}

}


findPathToTarget([1,1],[3,2])


function debounce(fn, wait){

	let timeout = null;

	return function(){
		if(timeout){
			clearTimeout(timeout);
		}

		timeout = setTimeout(() => {fn.apply(this, arguments)}, wait);
	}
}

let arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];

function unique(arr){

	let obj = {};

	return arr.filter( item => { return obj.hasOwnProperty(JSON.stringify(item) + typeof item) ? false : obj[JSON.stringify(item) + typeof item] = true })
}


unique(arr);

function throttle(fn, delay){
	let previous = 0;

	return function(){
		let now = + new Date();

		if(now - previous > delay){
			fn.apply(this, arguments);
			previous = now;
		}
	} 
}


let arr = [1,2,3,1];

arr.reduce((pre, cur) => pre.then(() => new Promise( res => setTimeout( () => {console.log(cur); res();}, 1000))), Promise.resolve())


// 哈希计数
arr.reduce((pre, cur) => { 
						if(pre.hasOwnProperty(cur)){
							pre[cur] ++
						}else{ 
							pre[cur] = 1
						}
						return pre;
					}, {})

// 普通数组去重
arr.reduce( (pre, cur) => { 
							if(!pre.includes(cur)){
								pre.push(cur);
							}

							return pre;
						}, []);















                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         