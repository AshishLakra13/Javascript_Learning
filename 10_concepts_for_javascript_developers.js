//1. Arrow function

const sum = (a,b) => {
    return a+b;
}

// console.log(sum(5,7));



//2. default parameters
function add(a,b=5){
    return a+b;
}

// console.log(add(6));


//3.  IIFE - Immediately Invoked Function Expression
/*
    (function (){
        console.log(5+4);
    })();
*/

//4. Spread Operator
/*
    const numbers = [1,2,3,4,5];
    console.log([...numbers]);
    console.log([...numbers,10]);
*/


//5. isNaN() method
/*
    console.log(isNaN(12));
    console.log(isNaN(false));
    console.log(isNaN("12as"));
*/


//6.Primitive Values 
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

//7. References 
//1. Objects
//2. Functions

//8. Double/Triple Equal ("==" vs "===")

//9. Ternary Operator

//10. Destructuring