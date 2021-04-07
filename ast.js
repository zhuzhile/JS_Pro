// AST，抽象语法树，js 代码解析后的最小词法单元，而这个过程就是通过 Parser 来完成的。

// 那么 AST 可以做什么呢？

// •eslint: 校验你的代码风格
// •babel: 编译代码到 ES 低版本
// •taro/mpvue: 各种可以多端运行的小程序框架
// •GraphQL: 解析客户端查询

// 这儿有一个经典的代码压缩库: UglifyJS3[2]，一个用以代码压缩混淆的库。那它是如何完成一些压缩功能的，比如替换空白符，答案是 AST。

// UglifyJS 功能：

// •生成JS代码的抽象语法树(AST)，通过parse-js.js完成.
// •遍历AST语法树，做各种操作，比如自动缩进、缩短变量名、删除块括号{}、去空格、常量表达式、连续变量声明、语块合并、去掉无法访问的代码等，通过process.js完成.




const recast = require("recast");

// 你的"机器"——一段代码
// 我们使用了很奇怪格式的代码，想测试是否能维持代码结构
const code =
  `
  function add(a, b) {
    return a +
      // 有什么奇怪的东西混进来了
      b
  }
  `
// 用螺丝刀解析机器
const ast = recast.parse(code);

// ast可以处理很巨大的代码文件
// 但我们现在只需要代码块的第一个body，即add函数
const add  = ast.program.body[0]

console.log(add)