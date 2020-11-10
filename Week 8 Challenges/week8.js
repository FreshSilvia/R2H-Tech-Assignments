// Very Easy
function min(num1,num2) {
    if(num1 <= num2) {
        return num1
    } else {
        return num2
    }
}

console.log(min('ten','seven'))

//Easy 
const students = [
    {
        firstName: "Bob",
        lastName: "Jenkins" ,
        age: 20 ,

    },
    {
        firstName: "John",
        lastName: "Howard" ,
        age: 16 ,
    },
    {
        firstName: "Tory",
        lastName: "Rush" ,
        age: 25 ,
    }
]

console.log(`Hello,my name is ${students[1].firstName} ${students[1].lastName} and I'm ${students[1].age} years old.`)

//Medium
var month = Number(prompt(`Please enter number 1-12`));
if(month === 1) {
    console.log("January");
} else if(month === 2) {
    console.log("February")
} else if(month === 3) {
    console.log("March")
} else if(month === 4) {
    console.log("April")
} else if(month === 5) {
    console.log("May")
} else if(month === 6) {
    console.log("June")
} else if(month === 7) {
    console.log("July")
} else if(month === 8) {
    console.log("August")
} else if(month === 9) {
    console.log("September")
} else if(month === 10) {
    console.log("October")
} else if(month === 11) {
    console.log("November")
} else if(month === 12) {
    console.log("December")
} else {
    alert('UMMMMM Can you not read?')
}

//Hard
const massTom = 8;
const heightTom = 9;
const massJerry = 45;
const heightJerry = 10;

const BMITom = massTom / heightTom ** 2;
const BMIJerry = massJerry / (heightJerry * heightJerry);
console.log(BMITom , BMIJerry)

if(BMITom > BMIJerry) {
    console.log(`Tom's BMI (${BMITom}) is higher than Jerry's! (${BMIJerry})`)
} else {
    console.log(`Jerry's BMI (${BMIJerry}) is higher than Tom's! (${BMITom}) `)
}