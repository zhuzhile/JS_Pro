        // 归并排序
        // O(nlogn)
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

		// 插入排序
		// O(n^2)
		function insertSort(arr){
			for(let i = 1, len = arr.length; i < len;i++){
				for(let j = i; j > 0;j--){
					if(arr[j] < arr[j-1]){
						let tmp = arr[j];
						arr[j] = arr[i];
						arr[i] = tmp;
					}else{
						break;
					}
				}
			}

			return arr;
		}

		// shell排序（这个排序垃圾的一笔雕凿）
		// O(n^2)
		function shellSort(nums){

			let len = nums.length;

			for(let delta = Math.floor(len / 2); delta > 0;delta = Math.floor(delta / 2)){
				for(let start = 0;start < delta;start ++){
					for(let i = start + delta; i < len; i += delta){
						for(let j = i; j > 0 && nums[j - delta] > nums[i];j -= delta){
							let tmp = nums[j];
							nums[j] = nums[j - delta];
							nums[j - delta] = tmp;
						}
					}
				}
			}

			return nums;
		}

		shellSort(arr);
