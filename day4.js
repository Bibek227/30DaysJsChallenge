// Loops

// for loop
// 1.
for(let i=1;i<11;i++){
    console.log(i);
}

// 2.
for(let i=1;i<11;i++){
    console.log("5 X",i,"=",5*i);
}

// while loop
// 3.
let sum=0
let i=1
while(i<=10){
    sum+=i
    i++
}
console.log(sum);

// 4.
let a=10
while(a>0){
    console.log(a);
    a--
}

// do while loop
// 5.
let b=1
do{  
    console.log(b);
    b++
}
while(b<6)

// 6.
let d=1
let fact=1
do{
    fact=fact*d
    d++
}
while(d<6)
console.log(fact);

// nested loops
// 7.
for(let i=1;i<=5;i++){
    let pattern=''
    for(let j=1;j<=i;j++){
        pattern+='* '
    }
    console.log(pattern);
}

// loop control statements
// 8.
for(let i=1;i<=10;i++){
    
    if (i==5){
        continue
    }
    console.log(i);
    
}

// 9.
for(let i=1;i<=10;i++){
    console.log(i);
    if (i==7){
        break
    }
    
    
}

