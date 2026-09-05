let form = document.getElementById("regForm");
let result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page reload

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    result.innerHTML =
        "<h3>Registration Successful!</h3>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Age:</strong> " + age + "</p>" +
        "<p><strong>Course:</strong> " + course + "</p>";
});
