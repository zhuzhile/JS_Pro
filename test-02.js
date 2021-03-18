// 箭头函数与setTimeout中的this指向问题
// setTimeout在非严格模式this下指向window
// 箭头函数本身是不具备this，指向定义时的外部this，而不是执行时的this
const obj = {
	name: "behippo",
	init(){
		// setTimeout(()=>{alert(`${this.name}` )}, 1000);
		setTimeout(function (){alert(`${this.name}` )}, 1000);
	}
}

obj.init();

