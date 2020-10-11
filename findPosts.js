/*

Build a web application that shows a list of posts and information about the post's author. This will require the following steps:

API endpoint: https://jsonplaceholder.typicode.com/

1. Make an API call to retrieve all of the posts.
2. Make an API call to retrieve all of the users.
3. Display the author's name and the post title and body on the page.

Grading criteria:
1. Use fetch, async, and await.
2. Use the find() method.
3. Use only ES6+ techniques if needed: template strings (`${}`), arrow functions, forEach(), etc.
4. Use GitHub and make at least 5 commits with meaningful commit messages in the present tense. For example: "Create filter function."
5. Do not have any extraneous comments beyond explanations of code (if needed) in your final result. Do not have any console.logs, in comments or otherwise.
6. CSS is not necessary and will not be graded but is encouraged for the sake of practice.

Stretch goal:

When a user clicks on a post, make an API call to retrieve the comments associated with that post and display them on the page.

*/

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;

};

const getUsers = async () => {
    const response2 = await fetch("https://jsonplaceholder.typicode.com/users");
    const postUsers = await response2.json();
    return postUsers;

};

const showBlogPosts = async (posts, users) => {
    const result = document.getElementsByClassName("result")[0];
    const postTitle = await getPosts();
    const usersName = await getUsers();
    postTitle.forEach((posts) => {
        result.innerHTML += `<div class="postTitle">${posts.title}</div></br>`;
        usersName.find((users) => {
            if(users.id === posts.userId){
                result.innerHTML += `<div class="postAuthor">by ${users.name}</div></br>`;
            };
        });
        result.innerHTML += `<div class="postBody">${posts.body}</div>`;
    });
};

showBlogPosts()



