
// Script的加载顺序测试
// let div_dom = document.getElementById("main");
// console.log(div_dom.nodeType);

// 箭头函数与setTimeout中的this指向问题
// setTimeout在非严格模式this下指向window
// 箭头函数本身是不具备this，指向定义时的外部this，而不是执行时的this
const obj = {
	name: "behippo",
	init(){
		setTimeout(()=>{alert(`${this.name}` )}, 1000);
		// setTimeout(function (){alert(`${this.name}` )}, 1000);
	}
}

obj.init();

// js中的事件流
// 捕获，处理，冒泡


let div_dom = document.getElementById("main");

document.onclick = function(event){
	console.log("冒泡阶段", event.target, event.currentTarget, event.eventPhase);
}

// 默认是在冒泡时捕获 Dom0
// div_dom.onclick = function(event){
// 	console.log(event.target);
// 	console.log(event.eventPhase);
// 	console.log(event.currentTarget);
// }

// false在冒泡时捕获 Dom2
div_dom.addEventListener('click', function(event){
	console.log(event.eventPhase === 2);   // ! eventpahse为2
	console.log(event.target === this);
},false);


// 捕获阶段
div_dom.addEventListener('click', function(event){
	console.log("捕获阶段", event.currentTarget);
},true);




