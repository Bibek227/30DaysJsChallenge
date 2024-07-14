// Arithmetic Operations
a=10
b=11
console.log('Arithmetic Operations');
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Assignment Operators
a1=10
console.log('Assignment Operators');
console.log(a1+=2);
console.log(a1-=2);

// Comparison operators
console.log('Comparison operators');
console.log(a>b);
console.log(a<b);
a2=11
b2=13
console.log(a2>=b);
console.log(b2<=a2);
console.log(a2==b2);
console.log(a2==b);
console.log(a2===b2);

// Logical Operators
console.log('Logical Operators');
if (a%2==0 && a>0){
    console.log(`${a} is positive and even`);
}
if (b%2==0 || b>0){
    console.log(`${b} is a number`);
}
if (!(a>0)){
    console.log(`${a} is negative`);
}
else{
    console.log('it is positive');
}

// Ternary Operator
console.log('Ternary Operator');
console.log(a>0?'positive':'negative');