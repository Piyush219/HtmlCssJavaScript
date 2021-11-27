var obj = {num:4}

var addToThis = function (a,b,c){
    return this.num + a + b + c;
}
var arr = [2,3,1]
console.log(`With Call: ${addToThis.call(obj,2,3,1)}`)
console.log(`With Apply 1: ${addToThis.apply(obj,arr)}`)
console.log(`With Apply 2: ${addToThis.apply(obj,[2,3,1])}`)

var bound = addToThis.bind(obj)    // Returns as a function
console.log(`With Bind: ${bound(2,3,1)}`)


// Student Age Object 

var student = {
    age : 20
}

var agePrint = function(){
    return this.age;
}

var studentBind = agePrint.bind(student)
console.log(`Student age is : ${studentBind()}`)

//Currying using bind

let multiply = function(x, y){
    console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2)  // Here we are setting x = 2 just like var =2
multiplyByTwo(3);   // This is called Currying 

let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(5);

//Currying using closure

let multiplyClosure = function(x){
    return function(y){
        console.log(x *y)
    }
}

let multiplyByTwoClosure = multiplyClosure(2);
multiplyByTwoClosure(3);

let multiplyByThreeClosure = multiplyClosure(3);
multiplyByThreeClosure(10);