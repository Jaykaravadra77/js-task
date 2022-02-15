var generator = function*(arr) {
  let i=0;
   while(true){
      yield arr[i++];
   }
};

 

let arr = [1,2,3]

let a = generator(arr);
 
setInterval(() => {
    console.log(a.next());
    
}, 1000);