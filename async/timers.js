// setTimeout - run once after a delay
console.log("Start");

setTimeout(function () {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End (does not wait for setTimeout)");

// setInterval - run repeatedly
let count = 0;
let intervalId = setInterval(function () {
    count++;
    console.log("Tick:", count);
    if (count >= 3) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);
