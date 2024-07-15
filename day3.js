// control structures

// If-else

// 1.
let a=10
if (a>0){
    console.log('number is positive');
}
else if(a<0){
    console.log('number is negative');
}
else{
    console.log('it is 0');
}

// 2.
const age=18
if(age>=18){
    console.log('Eligible');
}
else{
    console.log('Not Eligible');
}

// nested if-else

// 1.
let a1=10
let b1=12
let c1=9
if(a1>b1){
    if(a1>c1){
        console.log('a1 is larger');
    }
    else{
        console.log('c1 is larger');
    }
}
else if(b1>a1){
    if(b1>c1){
        console.log('b1 is larger');
    }
    else{
        console.log('c1 is larger');
    }
}
else{
    console.log('c1 is larger');
}


// Switch case

//1.
let dayNumber=3
switch(dayNumber){
    case 1:
        day='Sunday';
        break;
    case 2:
        day='Monday';
        break;
    case 3:
        day='Tuesday';
        break;
    case 4:
        day='Wednesday';
        break
    case 5:
        day='Thursday'
        break
    case 6:
        day='Friday'
        break
    case 7:
        day='Saturday'
        break
}
console.log(day);

//2.
let score=91
switch(true){
    case (score>=90 && score<=100):
        grade='A'
        break
        case (score >= 80 && score < 90):
            grade = "B";
            break;
        case (score >= 70 && score < 80):
            grade = "C";
            break;
        case (score >= 60 && score < 70):
            grade = "D";
            break;
        case (score >= 0 && score < 60):
            grade = "F";
            break;
        default:
            grade = "Invalid score";
}
console.log(`the grade is ${grade}`);

// conditional (ternary) operator
let number=10
number%2==0?console.log('even'):console.log('odd'); 

// combining condition
let year=2024
if (year%4==0 && year%100==0 || year%400==0){
    console.log('Leap Year');
}
else{
    console.log('not');
}