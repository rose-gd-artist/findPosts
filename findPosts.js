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

// const getPosts = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();
  
//     const postTitles = posts.map((post) => {
//       return post.title;
//     });
  
//     return postTitles;
//   };

//   const cities = [
//     { name: "Houston", population: 2099451, landmark: "NASA Space Center" },
//     { name: "Los Angeles", population: 3792621, landmark: "Hollywood Sign" },
//     { name: "New York", population: 8175133, landmark: "Statue of Liberty" },
//     { name: "Chicago", population: 2695598, landmark: "Willis Tower" },
//     { name: "Philadelphia", population: 1526006, landmark: "Independence Hall" },
//   ];
  
//   const getCityByName = (name) => {
//     const foundCity = cities.find((city) => {
//       return name === city.name;
//     });
  
//     return foundCity;
//   };
  
//let result = document.getElementsByClassName("result")[0];

// const printPosts = (postTitles) => {
//     const result = document.getElementsByClassName("result")[0];
//     const print = postTitles.map((postTitles) => {
//         return `<div class="postTitle">${postTitles}</div>`;
//     });
//     result.innerHTML += print.join("");

// };

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const response2 = await fetch("https://jsonplaceholder.typicode.com/users");
    const postUser = await response2.json();
  
    const result = document.getElementsByClassName("result")[0];

    const postTitles = posts.map((post) => {
      return post.title;
    });

    result.innerHTML += `<div class="postTitle">${postTitles}</div>`;

    const kkkkk = postUser.find((user) => {



        const authorName = postUser.map((user) => {

            return user.name;
            
        });
        console.log(authorName);
        result.innerHTML += `<div class="postUser">${authorName}</div>`;
    });

    result.innerHTML += kkkkk;

    const mapIt = posts.map((post) => {
        return post.body;
    });

    result.innerHTML += `<div class="postBody">${mapIt}</div>`;

    console.log(postTitles);
    console.log(posts);
    console.log(postUser);
    console.log(mapIt);
    console.log(kkkkk);

};

getPosts()

// const getUser = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const postUser = await response.json();
  
//     const result = document.getElementsByClassName("result")[0];

//     const userName = postUser.map((users) => {
//       return `<div class="postUser">${users.name}</div>`;
//     });

//     result.innerHTML += userName.join("");

// };

// getUser()

// getPostBody()
// const printPosts = (postTitles) => {
//     const result = document.getElementsByClassName("result")[0];
//     const print = postTitles.map((postTitles) => {
//         return `<div class="postTitle">${postTitles}</div>`;
//     });
//     result.innerHTML += print.join("");

// };