// Fetch data from a public API (requires internet)
async function getUser() {
    try {
        console.log("Fetching user...");
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let user = await response.json();
        console.log("Name:", user.name);
        console.log("Email:", user.email);
        console.log("City:", user.address.city);
    } catch (error) {
        console.log("Fetch failed:", error.message);
    }
}

getUser();

// Fetch multiple posts
async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
    let posts = await response.json();
    posts.forEach(function (post, index) {
        console.log((index + 1) + ". " + post.title);
    });
}

setTimeout(getPosts, 1500);
