// Functions

// Function declaration
// 1.
function check(n){
    if (n%2===0){
        console.log(`${n} is even`);
    }
    else{
        console.log(`${n} is odd`);
    }
}
check(2)

// 2.
function square(a){
    return a*a
}
console.log(square(10))

// Function expression
// 3.
function max(a1,a2){
    if (a1>a2){
        console.log(`${a1} is greater`);
    }
    else if(a1===a2){
        console.log('both are equal');
    }
    else{
        console.log(`${a2} is greater`);
    }
}
max(21,23)

// 4.
function concat(s1,s2){
    return s1+s2
}
console.log(concat('bibek',' sahoo'));

// Arrow function
// 5.
const addTwoNo=(x,y)=>{
    return x+y
}
console.log(addTwoNo(3,2));

// 6.
const checkchar=(str)=>{
   return str.includes('@')
}
console.log(checkchar('bibek@123'))

// function parameter and default value
// 7.
const prodTwo=(x1,x2=5)=>{
    return x1*x2
}
console.log(prodTwo(5));
console.log(prodTwo(5,2));

// 8.
const greet=(name,age=12)=>{
    return `hello ${name}! your age is ${age}.`
}
console.log(greet('bibek',21));

// Higher order function
// 9.
function calln(func,n){
    for(let i=1;i<=n;i++){
        func()
    }
}
function number(){
    console.log(9);
}
calln(number,2)

// 10.
function compose(func1,func2){
    return function(value){
        return func2(func1(value))
    }
}
const add5=x=>x+5
const multiplyBy2=x=>x*2

const combinedFunction=compose(add5,multiplyBy2)
const result=combinedFunction(10)  //(10+5)*2
console.log(result);