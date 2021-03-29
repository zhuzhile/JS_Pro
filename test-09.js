let obj = {name:'behippo'};

let objProxy = new Proxy(obj, {
	set:function(target, propKey, val, receiver){
		console.log("----set", receiver);
		if(propKey === 'age'){
			target[propKey] = 18;
		}else{
			target[propKey] = val ;
		}
	},
	get:function(target,propKey){
		console.log("----get ", propKey);
		if(propKey === 'name'){
			return 'king in the north';
		}else{
			return target[propKey];
		}
	}
})


const queuedObservers = new Set();

const observe = fn => {
	queuedObservers.add(fn);
}


const observable = obj => new Proxy(obj, {set})


function set(target, key, value, receiver){
	const result = Reflect.set(target, key, value, receiver);
	queuedObservers.forEach(observer => {
		observer();
	})

	return result;
}

const person = observable({
	name: 'behippo',
	age:20
})


function print(){
	console.log(`${person.name} is ${person.age}`)
}

observe(print);
person.name = 'benothing'
















