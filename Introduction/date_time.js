let timestamp = new Date();
// custom formating
let formatter = Intl.DateTimeFormat("en-US",{
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
});

console.log(Date.now());
console.log(formatter.format(timestamp));


// Common Examples
// Add days to dates
let today = new Date();
today.setDate(today.getDate() + 2); // add 2 days

console.log(today);

// Difference between two dates
let date1 = new Date("2024-12-28");
let date2 = new Date("2025-01-01");

let difference = date2 - date1;
// Difference in milliseconds
console.log(difference/(1000*60*60), "hours"); //convert to days




// console.log(timestamp.getFullYear());
// console.log(timestamp.getMonth());
// console.log(timestamp.getDay())
// console.log(timestamp.getDate())
// console.log(timestamp.toString())
// console.log(timestamp.toISOString())
// console.log(timestamp.getHours())
// console.log(timestamp.getMinutes())
// console.log(timestamp.getSeconds())
// console.log(timestamp.getMilliseconds())

