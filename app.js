
// import dayjs from "dayjs" //this is the common modern way but won't work in this set up
import "./node_modules/dayjs/dayjs.min.js"; // i believe the reason is to to how the build is made unsure.
// const dayjs = require("dayjs"); // the old way of doing it


console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");




console.log(dayjs().format('YYYY MMMM-DD-HH:mm:ss SSS A'));
