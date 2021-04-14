// 防抖与节流知识点： 闭包，箭头函数

// 防抖：
// 在n秒内，执行一次，如果在n秒内再次触发，则重新计时。

// 节流：
// 在n秒内只执行一次。


function debounce(fn, delay){

	return function(){
		clearTimeout(fn.id);
		fn.id = setTimeout(()=>{
			fn.apply(this, arguments);
		}, delay)
	}
}


function throttle(fn, delay){
	let isAvaliable = true;

	return function(){
		if(! isAvaliable){
			return ;
		}

		isAvaliable = false;

		clearTimeout(fn.id);

		fn.id = setTimeout(() => {
			fn.apply(this, arguments);
			isAvaliable = true;
		},delay)

	}
}



// 部署iterator接口，扩展运算符和for of循环与之息息相关。

Number.prototype[Symbol.iterator] = function * (){
	let num = this.valueOf();

	for(let i = 0; i <= num ;){
		yield i++;
	}
}


//模拟一段ajax请求
function ajax(content) {
  console.log('ajax request ' + content)
}


let debounceAjax = debounce(ajax, 500)

inputb.addEventListener('keyup', function (e) {
        debounceAjax(e.target.value)
    })


function throttle(fun, delay) {
        let last, deferTimer
        return function (args) {
            let that = this
            let _args = arguments
            let now = +new Date()
            if (last && now < last + delay) {
                clearTimeout(deferTimer)
                deferTimer = setTimeout(function () {
                    last = now
                    fun.apply(that, _args)
                }, delay)
            }else {
                last = now
                fun.apply(that,_args)
            }
        }
    }

    let throttleAjax = throttle(ajax, 1000)

    let inputc = document.getElementById('throttle')
    inputc.addEventListener('keyup', function(e) {
        throttleAjax(e.target.value)
    })

