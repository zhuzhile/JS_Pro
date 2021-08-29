
    // 如何找出数组中重复次数最多的数字;切到javascript语言编写
    let arry = [9, 1, 6, 3, 3, 1, 2, 1, 8]

   function findMostRepeatedNum(arry){
    	let obj = {}, result = -Infinity, ans = '';

    	for(let item of arry){
    		if(!obj[item]){
    			obj[item] = 1;
    		}else{
    			obj[item] ++;
    		}
    	}
    
    	for(let key of Object.keys(obj)){
    		if(obj[key] > result){
                result = obj[key];
                ans = key;
            }
    	}
    
    	console.log(ans);
	}	

	findMostRepeatedNum(arry);


function getSum(num1, num2){
 	let i = num1.length - 1, j = num2.length - 1;
    let carry = 0, sum = 0;
    let result = [];
    let floor = Math.floor;
    
    while(i >= 0 || j >= 0 || carry){
        let x = (i >= 0 ? num1.charAt(i) - 0:0);
        let y = j >= 0 ? num2.charAt(j) - 0:0
        
        sum = x + y + carry;
        result.push(sum % 10);
        carry = floor(sum / 10);
        i --;
        j --;
    }
        
    result.reverse();
    console.log(result.join(''));
}

getSum('9007199254740991','9007199254740991111');