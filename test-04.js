// JS执行三个阶段，
// 语法分析阶段
// 预编译阶段(GO, AO, VO, VO -> AO（执行之后）,argumentsd对象创建，变量提升，函数声明提升(函数声明优于变量))，作用域链，确定this
// 执行阶段（EventLoop，事件循环机制，微任务（axios，promise.then）,宏任务（script代码块，setTimeout，setIntervel））

// 参考 https://mp.weixin.qq.com/s/Lhd5N5a1b8fAstWn5H3B3Q

console.log(person)
console.log(personFun)
var person ="saucxs";

console.log(person)

function personFun()
{

    console.log(person)
	var person = "songEagle";
    console.log(person)
}

personFun()
console.log(person)


// 输出结果

// undefined
// VM65:2 ƒ personFun()
// {

//     console.log(person)
// 	var person = "songEagle";
//     console.log(person)
// }
// VM65:5 saucxs
// VM65:10 undefined
// VM65:12 songEagle
// VM65:16 saucxs



