/**
 * if, else, if...else, switch
 * if - execute only when the conditon is true.
 * else - execute when the if condition condition evaluate to false.
 * else if - specify a new condition to test if the first condition evaluate to false.
 * switch - Many alternatives of block of code to execute.
 */

let age = 17;

// if (age > 18) {
//     // console.log("Adult")
// }


// if (age > 18) {
//     console.log("Adult")
// } else {
//     console.log("Young");
// }

const time = new Date().getHours();

if (time < 10) {
    console.log("Good morning");
} else if (time < 20) {
    console.log("Good day");
} else {
    console.log("Good evening");
}

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day)