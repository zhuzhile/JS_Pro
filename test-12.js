
let p = Promise.all([fetch("https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"),
					new Promise(function(resolve, reject){
									setTimeout( ()=> resolve('hello, you motherfucker'), 5000)
								})
			]);

p.then(function(res){
			console.log(res);
		})
 .catch(function(error){
		    console.log(error);
		})

 
 // ------


 let p = Promise.race([fetch("https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"),
					 new Promise(function(resolve, reject){
									setTimeout( ()=> resolve('hello, you motherfucker'), 5000)
								})
			]);
 p.then(function(res){
			console.log(res);
		})
 .catch(function(error){
		    console.log(error);
		})


