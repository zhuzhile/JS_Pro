
console.log("-----------");
let div = document.createElement('div');
div.innerHTML = 'behippo';
document.body.appendChild(div);


let arr = [];

for(let i = 0; i < 5 ;i ++){
	arr.push(Math.floor(Math.random()*9) + 1);
}


console.log(arr);


// 冒泡排序
for(let i = 0, len = arr.length; i < len; i ++){
	for(let j = i + 1; j < len; j ++){
		if(arr[i] > arr[j]){
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
}



// 选择排序
let min_index = Infinity;

for(let i = 0,len = arr.length; i < len; i++){
	min_index = i;
	for(let j = i + 1; j < len; j++){
		if(arr[min_index] > arr[j]){
			min_index = j;
		}
	}

	[arr[min_index], arr[i]] = [arr[i], arr[min_index]]
}

console.log(arr);


// 快速排序

function quickSort(arr){
	if(arr.length <= 1){
		return arr;
	}

	let left = [];
	let right = [];
	let pivot_index = Math.floor(arr.length / 2);
	let pivot = arr.splice(pivot_index, 1)[0];

	arr.forEach((item) => {
		if(item < pivot){
			left.push(item);
		}else{
			right.push(item);
		}
	})

	return quickSort(left).concat(pivot, quickSort(right));
}


