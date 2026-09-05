// async/await makes asynchronous code look synchronous

function fetchUserData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({ name: "Melkamu Belay", age: 24, course: "JavaScript" });
        }, 1000);
    });
}

async function showUser() {
    console.log("Loading user...");
    let user = await fetchUserData();
    console.log("Name:", user.name);
    console.log("Age:", user.age);
    console.log("Course:", user.course);
}

showUser();

// Error handling with try/catch
function riskyOperation(shouldFail) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (shouldFail) {
                reject("Something went wrong!");
            } else {
                resolve("Operation succeeded!");
            }
        }, 500);
    });
}

async function runWithErrorHandling() {
    try {
        let result = await riskyOperation(false);
        console.log(result);
    } catch (error) {
        console.log("Caught error:", error);
    }
}

runWithErrorHandling();
