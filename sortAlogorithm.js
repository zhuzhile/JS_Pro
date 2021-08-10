        // 归并排序
        let len = Math.floor(Math.random()*10);
		let arr = [];
		for(let i = 0; i < len;i++){
			arr.push(Math.trunc(Math.random()*10));
		}

		function mergeSort(arr){
			let len = arr.length;
			if(len < 2){
				return arr;
			}

			let middle = Math.floor( len / 2);
			let left = arr.slice(0, middle);
			let right = arr.slice(middle);

			return merge(mergeSort(left), mergeSort(right));
		}

		function merge(left, right){
			let result = [];

			while(left.length && right.length){
				if(left[0] <= right[0]){
					result.push(left.shift());

				}else{
					result.push(right.shift());
				}
			}

			if(left.length){
				result.push(...left);
			}

			if(right.length){
				result.push(...right);
			}

			return result;
		}

		console.log(mergeSort(arr));