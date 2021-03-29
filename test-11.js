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



