// // 闭包好处与缺点

// // JS高级编程定义： 闭包是有权访问其他的函数作用域内部变量的函数。
// // 好处1： 定义私有变量，私有方法


// // 好处2： 模块化开发，重用性，可维护性高

// 坏处： 如果不及时解除绑定，容易造成内存泄漏，而且闭包函数的内存要比普通函数要占的更多。
// 闭包尽量避免使用




// let counter = (function (){
// 	let name = 'behippo';
// 	let age = 22;
// 	let count = 0;

// 	function showMessage(){
// 		alert(name, age);
// 	}

// 	return {
// 		showMessage: showMessage,
// 		increment(){
// 			count ++;
// 		},
// 		showCount(){
// 			alert(count);
// 		}
// 	}
// })()



// // 每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境。然而在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量。


// var makeCounter = function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {
//       changeBy(-1);
//     },
//     value: function() {
//       return privateCounter;
//     }
//   }
// };

// var Counter1 = makeCounter();
// var Counter2 = makeCounter();
// console.log(Counter1.value()); /* logs 0 */
// Counter1.increment();
// Counter1.increment();
// console.log(Counter1.value()); /* logs 2 */
// Counter1.decrement();
// console.log(Counter1.value()); /* logs 1 */
// console.log(Counter2.value()); /* logs 0 */



function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus =(function (help) {
    	return function(){
  			document.getElementById('help').innerHTML = help;

    	}
	})(item.help);
  }
}


setupHelp();