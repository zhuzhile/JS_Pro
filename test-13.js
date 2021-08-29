// 复杂数据类型去重
// 我是笨比
function unique(array){
	let obj = {};

	return array.filter( item => obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true));
}


let arry = [{'a' : 'go fuck youself', 'b' :'what the fuck'},{'b' :'what the fuck'},{'b' :'what the fuck'}];

unique(arry);


