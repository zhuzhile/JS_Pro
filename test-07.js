var url = 'http://jsonplaceholder.typicode.com/albums/6';
let name = "behippo";

let getData = function (){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = handler;

        xhr.open('GET', url);
        xhr.send();

         function handler(){
            console.log('hello');
            if( xhr.readyState === 4 ){
                if(xhr.status === 200 ){
                     resolve(xhr.responseText);
                }else{
                    reject(new Error("fucking error"));
                }
            }
        }
    })
}

getData().then(function(success){
    console.log(success);
}, function(fail){
    console.error(fail)
})

export  {name}