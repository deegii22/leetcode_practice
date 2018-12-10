/* --------------------
     Add your code here
    --------------------- */
var fizzBuzz = function(n) {
    let newStr = [];
    for(let i=1;i<=n;i++){
        if(i%3 === 0 && i%5 === 0){
            newStr.push("FizzBuzz"); 
        } else if(i%5 === 0){
            newStr.push("Buzz");
        } else if(i%3 === 0){
            newStr.push("Fizz");
        } else {
            newStr.push("" + i);
        }       
    }
    return newStr;
};
fizzBuzz(15);
