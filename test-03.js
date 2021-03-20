let div_dom = document.getElementById("main");
console.log(div_dom.nodeType); 

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



// 事件委托(利用冒泡阶段)

div_dom.addEventListener('click', function(event){
	// const arr_li = ['component01', 'component02', 'component03'];

	alert(event.target.id);
}, false)


