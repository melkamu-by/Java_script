// Basic Promise
let checkAge = new Promise(function (resolve, reject) {
    let age = 19;
    if (age >= 18) {
        resolve("You are an adult.");
    } else {
        reject("You are a minor.");
    }
});

checkAge
    .then(function (message) {
        console.log("Success:", message);
    })
    .catch(function (error) {
        console.log("Error:", error);
    });

// Promise that returns a value after delay
function wait(seconds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Done waiting " + seconds + " seconds!");
        }, seconds * 1000);
    });
}

wait(1).then(function (msg) {
    console.log(msg);
});

// Chaining promises
function step1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Step 1 complete");
            resolve(10);
        }, 500);
    });
}

function step2(num) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Step 2 complete");
            resolve(num * 2);
        }, 500);
    });
}

step1()
    .then(step2)
    .then(function (result) {
        console.log("Final result:", result);
    });
